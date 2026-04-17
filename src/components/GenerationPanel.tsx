import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CheckCircle2, AlertCircle, Eye, Sparkles, Bot,
  ChevronDown, ChevronUp, Zap, FileCode2, Palette,
  Layout, Code2, Cpu,
} from 'lucide-react';
import type { GenerationStatus, Website } from '../types';
import type { SummaryStatus } from '../pages/Home';
import { useLanguage } from './LanguageProvider';

interface GenerationPanelProps {
  status: GenerationStatus;
  streamedCode: string;
  currentWebsite: Website | null;
  onPreview: (id: string) => void;
  errorMessage?: string;
  summaryMessage: string;
  summaryStatus: SummaryStatus;
  userName?: string;
}

function renderMarkdown(text: string): string {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\n/g, '<br/>');
}

// Real streaming-based progress phases derived from actual char count
const PROGRESS_PHASES = [
  { minChars: 0,    maxChars: 200,   icon: Cpu,       label: 'Initializing AI engine…',           color: '#9A96B0' },
  { minChars: 200,  maxChars: 1000,  icon: Palette,   label: 'Picking aesthetic direction…',      color: '#7C3AED' },
  { minChars: 1000, maxChars: 5000,  icon: Layout,    label: 'Structuring layout & sections…',    color: '#7C3AED' },
  { minChars: 5000, maxChars: 15000, icon: Code2,     label: 'Writing CSS & animations…',         color: '#F97316' },
  { minChars: 15000,maxChars: 30000, icon: FileCode2, label: 'Adding JavaScript interactions…',   color: '#F97316' },
  { minChars: 30000,maxChars: 50000, icon: Zap,       label: 'Polishing final details…',          color: '#10B981' },
  { minChars: 50000,maxChars: Infinity, icon: Sparkles, label: 'Wrapping up the masterpiece…',   color: '#10B981' },
];

function getPhaseFromChars(chars: number) {
  return PROGRESS_PHASES.find(p => chars >= p.minChars && chars < p.maxChars)
    ?? PROGRESS_PHASES[PROGRESS_PHASES.length - 1];
}

function getProgressPercent(chars: number, status: GenerationStatus): number {
  if (status === 'thinking') return 8;
  if (status === 'done') return 100;
  // Map char count to 10–92% range
  const maxChars = 65000;
  return Math.min(92, 10 + (chars / maxChars) * 82);
}

export default function GenerationPanel({
  status,
  streamedCode,
  currentWebsite,
  onPreview,
  errorMessage,
  summaryMessage,
  summaryStatus,
  userName = 'there',
}: GenerationPanelProps) {
  const { t } = useLanguage();
  const summaryRef = useRef<HTMLDivElement>(null);
  const [showLog, setShowLog] = useState(true);
  const [phaseHistory, setPhaseHistory] = useState<string[]>([]);
  const lastPhaseRef = useRef<string>('');
  const startTimeRef = useRef<number>(0);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const charCount = streamedCode ? streamedCode.length : 0;
  const progressPercent = getProgressPercent(charCount, status);
  const currentPhase = getPhaseFromChars(charCount);

  // Start timer when generation begins
  useEffect(() => {
    if (status === 'thinking' || status === 'streaming') {
      if (!startTimeRef.current) {
        startTimeRef.current = Date.now();
      }
      timerRef.current = setInterval(() => {
        setElapsedSeconds(Math.floor((Date.now() - startTimeRef.current) / 1000));
      }, 1000);
    }
    if (status === 'done' || status === 'error' || status === 'idle') {
      if (timerRef.current) clearInterval(timerRef.current);
      if (status === 'idle') {
        startTimeRef.current = 0;
        setElapsedSeconds(0);
      }
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [status]);

  // Track phase transitions based on REAL streaming data
  useEffect(() => {
    if (status !== 'streaming' && status !== 'thinking') return;

    const phaseLabel = status === 'thinking'
      ? 'Connecting to Alsytes AI engine…'
      : currentPhase.label;

    if (phaseLabel !== lastPhaseRef.current) {
      lastPhaseRef.current = phaseLabel;
      setPhaseHistory(prev => {
        if (prev.includes(phaseLabel)) return prev;
        return [...prev, phaseLabel];
      });
    }
  }, [charCount, status, currentPhase.label]);

  // Reset on new generation
  useEffect(() => {
    if (status === 'thinking') {
      setPhaseHistory([]);
      lastPhaseRef.current = '';
      startTimeRef.current = Date.now();
      setElapsedSeconds(0);
    }
  }, [status]);

  useEffect(() => {
    if (summaryRef.current && summaryStatus === 'generating') {
      summaryRef.current.scrollTop = summaryRef.current.scrollHeight;
    }
  }, [summaryMessage, summaryStatus]);

  if (status === 'idle') return null;

  const isGenerating = status === 'thinking' || status === 'streaming';
  const isDone = status === 'done';
  const isError = status === 'error';
  const linesCount = streamedCode ? streamedCode.split('\n').length : 0;
  const PhaseIcon = currentPhase.icon;

  return (
    <div className="flex flex-col gap-4">
      {/* ── Main status card ── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-2xl overflow-hidden"
        style={{ background: '#fff', border: '1px solid #E2DFEF', boxShadow: '0 4px 24px rgba(60,40,120,0.10)' }}
      >
        {isGenerating && (
          <>
            {/* Header */}
            <div
              className="px-6 py-5"
              style={{ background: 'linear-gradient(135deg, rgba(124,58,237,0.05), rgba(249,115,22,0.03))' }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center"
                    style={{ background: 'linear-gradient(135deg, #7C3AED, #F97316)', boxShadow: '0 4px 14px rgba(124,58,237,0.35)' }}
                  >
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                    >
                      <Sparkles size={16} className="text-white" />
                    </motion.div>
                  </div>
                  <div>
                    <p className="text-base" style={{ fontWeight: 700, color: '#14121F' }}>
                      {t.generation.beingCreated}
                    </p>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="text-xs" style={{ color: '#9A96B0' }}>
                        Alsytes AI
                      </span>
                      <span style={{ color: '#E2DFEF' }}>·</span>
                      <span className="text-xs font-mono" style={{ color: '#9A96B0' }}>
                        {elapsedSeconds}s
                      </span>
                    </div>
                  </div>
                </div>

                {charCount > 0 && (
                  <div className="text-right">
                    <p className="text-sm font-mono font-semibold" style={{ color: '#14121F' }}>
                      {charCount.toLocaleString()}
                    </p>
                    <p className="text-xs" style={{ color: '#9A96B0' }}>chars</p>
                  </div>
                )}
              </div>

              {/* Real progress bar */}
              <div className="relative">
                <div className="h-2 rounded-full overflow-hidden" style={{ background: '#F3F2FA' }}>
                  <motion.div
                    className="h-full rounded-full relative overflow-hidden"
                    style={{ background: 'linear-gradient(90deg, #7C3AED, #A855F7, #F97316)' }}
                    animate={{ width: `${progressPercent}%` }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                  >
                    {/* shimmer */}
                    <motion.div
                      className="absolute inset-0"
                      style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)' }}
                      animate={{ x: ['-100%', '200%'] }}
                      transition={{ duration: 1.8, repeat: Infinity, ease: 'linear' }}
                    />
                  </motion.div>
                </div>
                <div className="flex items-center justify-between mt-1.5">
                  <div className="flex items-center gap-1.5">
                    <PhaseIcon size={11} style={{ color: currentPhase.color }} />
                    <span className="text-xs font-medium" style={{ color: currentPhase.color }}>
                      {status === 'thinking' ? 'Connecting to Alsytes AI engine…' : currentPhase.label}
                    </span>
                  </div>
                  <span className="text-xs font-mono" style={{ color: '#9A96B0' }}>
                    {Math.round(progressPercent)}%
                  </span>
                </div>
              </div>
            </div>

            {/* Phase history log — driven by REAL streaming data */}
            <div className="px-6 py-4" style={{ borderTop: '1px solid #F3F2FA' }}>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    {[0, 1, 2].map((i) => (
                      <motion.div
                        key={i}
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ background: '#7C3AED' }}
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.2 }}
                      />
                    ))}
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#9A96B0' }}>
                    Live progress
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  {linesCount > 0 && (
                    <span className="text-xs font-mono" style={{ color: '#9A96B0' }}>
                      {linesCount.toLocaleString()} lines
                    </span>
                  )}
                  <button
                    onClick={() => setShowLog((s) => !s)}
                    className="flex items-center gap-1 text-xs transition-colors"
                    style={{ color: '#9A96B0' }}
                  >
                    {showLog ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
                  </button>
                </div>
              </div>

              <AnimatePresence>
                {showLog && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="flex flex-col gap-2">
                      {phaseHistory.length === 0 ? (
                        <div
                          className="flex items-center gap-2 text-sm py-2 px-3 rounded-xl"
                          style={{ background: '#F8F7FF', border: '1px solid #E2DFEF', color: '#9A96B0' }}
                        >
                          <div
                            className="w-3 h-3 border-2 rounded-full animate-spin flex-shrink-0"
                            style={{ borderColor: 'rgba(124,58,237,0.2)', borderTopColor: '#7C3AED' }}
                          />
                          {t.generation.initializingAI}
                        </div>
                      ) : (
                        phaseHistory.map((msg, i) => {
                          const isLast = i === phaseHistory.length - 1 && status === 'streaming';
                          return (
                            <motion.div
                              key={msg}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3 }}
                              className="flex items-center gap-2.5 text-sm py-2 px-3 rounded-xl"
                              style={{
                                background: isLast ? 'rgba(124,58,237,0.07)' : '#F8F7FF',
                                border: `1px solid ${isLast ? 'rgba(124,58,237,0.20)' : '#E2DFEF'}`,
                              }}
                            >
                              {isLast ? (
                                <motion.div
                                  className="w-3 h-3 border-2 rounded-full flex-shrink-0"
                                  style={{ borderColor: 'rgba(124,58,237,0.2)', borderTopColor: '#7C3AED' }}
                                  animate={{ rotate: 360 }}
                                  transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                                />
                              ) : (
                                <CheckCircle2 size={12} style={{ color: '#10B981', flexShrink: 0 }} />
                              )}
                              <span style={{ color: isLast ? '#7C3AED' : '#4A4660', fontWeight: isLast ? 600 : 400 }}>
                                {msg}
                              </span>
                            </motion.div>
                          );
                        })
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </>
        )}

        {/* Done state */}
        {isDone && currentWebsite && (
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            className="px-6 py-6"
          >
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: 'rgba(16,185,129,0.12)', border: '1px solid rgba(16,185,129,0.25)' }}
              >
                <CheckCircle2 size={22} style={{ color: '#10B981' }} />
              </div>
              <div>
                <p className="text-base" style={{ fontWeight: 700, color: '#14121F' }}>
                  {userName !== 'there'
                    ? t.generation.websiteReady.replace('{name}', `${userName},`)
                    : t.generation.websiteReadyGeneric}
                </p>
                <p className="text-sm mt-0.5" style={{ color: '#9A96B0' }}>{t.generation.comeAndLook}</p>
              </div>
            </div>

            {/* Stats row */}
            <div
              className="grid grid-cols-3 gap-3 mb-5 p-4 rounded-xl"
              style={{ background: '#F8F7FF', border: '1px solid #E2DFEF' }}
            >
              <div className="text-center">
                <p className="text-lg font-bold font-mono" style={{ color: '#14121F' }}>
                  {charCount.toLocaleString()}
                </p>
                <p className="text-xs mt-0.5" style={{ color: '#9A96B0' }}>characters</p>
              </div>
              <div className="text-center" style={{ borderLeft: '1px solid #E2DFEF', borderRight: '1px solid #E2DFEF' }}>
                <p className="text-lg font-bold font-mono" style={{ color: '#14121F' }}>
                  {streamedCode.split('\n').length.toLocaleString()}
                </p>
                <p className="text-xs mt-0.5" style={{ color: '#9A96B0' }}>lines</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-bold font-mono" style={{ color: '#14121F' }}>
                  {elapsedSeconds}s
                </p>
                <p className="text-xs mt-0.5" style={{ color: '#9A96B0' }}>build time</p>
              </div>
            </div>

            <div className="flex items-center justify-between mb-5 flex-wrap gap-3">
              <div>
                <p className="text-sm font-semibold" style={{ color: '#14121F' }}>{currentWebsite.name}</p>
                <div className="flex items-center gap-1.5 mt-1">
                  <span
                    className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium"
                    style={{ background: 'rgba(16,185,129,0.10)', border: '1px solid rgba(16,185,129,0.22)', color: '#10B981' }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    Ready to preview
                  </span>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => onPreview(currentWebsite.id)}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white"
                style={{ background: 'linear-gradient(135deg, #7C3AED, #F97316)', boxShadow: '0 4px 16px rgba(124,58,237,0.30)' }}
              >
                <Eye size={14} />
                {t.generation.openPreview}
              </motion.button>
            </div>

            {/* Phase log (collapsed by default when done) */}
            <div>
              <button
                onClick={() => setShowLog((s) => !s)}
                className="flex items-center gap-2 text-xs font-medium mb-2 transition-colors"
                style={{ color: '#9A96B0' }}
              >
                {showLog ? <ChevronUp size={11} /> : <ChevronDown size={11} />}
                {showLog ? 'Hide build log' : 'Show build log'}
              </button>
              <AnimatePresence>
                {showLog && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="flex flex-col gap-1.5">
                      {phaseHistory.map((msg, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 text-xs py-1.5 px-3 rounded-lg"
                          style={{ background: '#F8F7FF', border: '1px solid #E2DFEF', color: '#4A4660' }}
                        >
                          <CheckCircle2 size={11} style={{ color: '#10B981', flexShrink: 0 }} />
                          {msg}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}

        {/* Error state */}
        {isError && (
          <div className="flex items-start gap-3 p-6">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: 'rgba(239,68,68,0.10)', border: '1px solid rgba(239,68,68,0.20)' }}
            >
              <AlertCircle size={18} style={{ color: '#EF4444' }} />
            </div>
            <div>
              <p className="text-sm font-semibold" style={{ color: '#EF4444' }}>{t.generation.generationFailed}</p>
              <p className="text-xs mt-1 leading-relaxed" style={{ color: '#9A96B0' }}>{errorMessage}</p>
            </div>
          </div>
        )}
      </motion.div>

      {/* ── AI Summary Chat Bubble ── */}
      <AnimatePresence>
        {(summaryStatus === 'generating' || summaryStatus === 'done') && summaryMessage && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="flex items-start gap-3"
          >
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
              style={{ background: 'rgba(124,58,237,0.10)', border: '1px solid rgba(124,58,237,0.20)' }}
            >
              <Bot size={15} style={{ color: '#7C3AED' }} />
            </div>

            <div
              className="flex-1 rounded-2xl rounded-tl-sm px-5 py-4"
              style={{ background: '#fff', border: '1px solid #E2DFEF', boxShadow: '0 2px 12px rgba(60,40,120,0.07)' }}
            >
              <div className="flex items-center gap-1.5 mb-3">
                <Sparkles size={11} style={{ color: '#7C3AED' }} />
                <span className="text-xs font-bold uppercase tracking-wider" style={{ color: '#7C3AED' }}>
                  Alsytes
                </span>
                {summaryStatus === 'generating' && (
                  <div className="flex gap-1 ml-1">
                    {[0, 1, 2].map((i) => (
                      <motion.div
                        key={i}
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ background: '#7C3AED', opacity: 0.4 }}
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.2 }}
                      />
                    ))}
                  </div>
                )}
              </div>

              <div
                ref={summaryRef}
                className="text-sm leading-relaxed overflow-y-auto"
                style={{ maxHeight: 300, color: '#4A4660' }}
                dangerouslySetInnerHTML={{ __html: renderMarkdown(summaryMessage) }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Summary skeleton */}
      <AnimatePresence>
        {summaryStatus === 'generating' && !summaryMessage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex items-start gap-3"
          >
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
              style={{ background: 'rgba(124,58,237,0.10)', border: '1px solid rgba(124,58,237,0.20)' }}
            >
              <Bot size={15} style={{ color: '#7C3AED' }} />
            </div>
            <div
              className="flex-1 rounded-2xl rounded-tl-sm px-5 py-4"
              style={{ background: '#fff', border: '1px solid #E2DFEF' }}
            >
              <div className="flex items-center gap-1.5 mb-3">
                <Sparkles size={11} style={{ color: '#7C3AED' }} />
                <span className="text-xs font-bold uppercase tracking-wider" style={{ color: '#7C3AED' }}>Alsytes</span>
              </div>
              <div className="flex flex-col gap-2">
                {[68, 88, 52, 78].map((w, i) => (
                  <div key={i} className="shimmer h-2.5 rounded-full" style={{ width: `${w}%`, animationDelay: `${i * 0.12}s` }} />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
