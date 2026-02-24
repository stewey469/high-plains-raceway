"use client";

import { useState, useMemo } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Timer,
  Flag,
  Car,
  Bike,
  Trophy,
  Star,
  Calendar,
} from "lucide-react";
import { ALL_EVENTS, MOTORSPORTREG_URL, type HPREvent, type EventCategory } from "@/lib/constants";

const CATEGORY_COLORS: Record<EventCategory, string> = {
  "Cars Lapping": "bg-blue-500",
  "Motorcycles Lapping": "bg-orange-500",
  Racing: "bg-accent",
  Rental: "bg-emerald-500",
  "Special Event": "bg-yellow-500",
};

const CATEGORY_ICONS: Record<EventCategory, typeof Car> = {
  "Cars Lapping": Car,
  "Motorcycles Lapping": Bike,
  Racing: Trophy,
  Rental: Calendar,
  "Special Event": Star,
};

function getMonthData(year: number, month: number) {
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const startPad = firstDay.getDay();
  const totalDays = lastDay.getDate();
  return { startPad, totalDays, firstDay, lastDay };
}

function formatMonthYear(year: number, month: number) {
  return new Date(year, month, 1).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });
}

function EventCard({ event }: { event: HPREvent }) {
  const color = CATEGORY_COLORS[event.category];
  const Icon = CATEGORY_ICONS[event.category];
  const date = new Date(event.date + "T00:00:00");
  const formatted = date.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <a
      href={MOTORSPORTREG_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-card hover:bg-card-hover border border-border rounded-xl p-5 sm:p-6 transition-all duration-200 hover:border-accent/20"
    >
      <div className="flex items-start gap-4 sm:gap-5">
        <div className="shrink-0 text-center w-14">
          <div className="text-[10px] text-accent font-bold uppercase tracking-wider">
            {date.toLocaleDateString("en-US", { month: "short" })}
          </div>
          <div className="text-2xl font-bold leading-tight">
            {date.getDate()}
          </div>
          <div className="text-[10px] text-muted">
            {date.toLocaleDateString("en-US", { weekday: "short" })}
          </div>
        </div>

        <div className="h-12 w-px bg-border shrink-0 hidden sm:block" />

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 mb-1.5">
            <h3 className="font-semibold text-[15px] group-hover:text-accent transition-colors truncate">
              {event.title}
            </h3>
            {event.status === "tentative" && (
              <span className="shrink-0 text-[10px] font-semibold uppercase tracking-wider bg-yellow-500/10 text-yellow-400 px-2.5 py-0.5 rounded-full border border-yellow-500/20">
                Tentative
              </span>
            )}
          </div>
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted">
            <span className="flex items-center gap-1.5">
              <Timer className="w-3.5 h-3.5" />
              {event.time}
            </span>
            <span className="flex items-center gap-1.5">
              <div className={`w-2 h-2 ${color} rounded-full`} />
              {event.category}
            </span>
          </div>
          <div className="text-xs text-muted mt-1">{formatted}</div>
        </div>

        <div className="shrink-0 hidden sm:flex items-center gap-1.5 text-xs text-muted group-hover:text-accent transition-colors">
          Register
          <ExternalLink className="w-3 h-3" />
        </div>
      </div>
    </a>
  );
}

type ViewMode = "calendar" | "list";
type FilterCategory = "all" | EventCategory;

export default function CalendarView() {
  const now = new Date();
  const [year, setYear] = useState(now.getFullYear());
  const [month, setMonth] = useState(now.getMonth());
  const [view, setView] = useState<ViewMode>("list");
  const [filter, setFilter] = useState<FilterCategory>("all");

  const filteredEvents = useMemo(() => {
    return ALL_EVENTS.filter((e) => {
      if (filter !== "all" && e.category !== filter) return false;
      return true;
    });
  }, [filter]);

  const monthEvents = useMemo(() => {
    return filteredEvents.filter((e) => {
      const d = new Date(e.date + "T00:00:00");
      return d.getFullYear() === year && d.getMonth() === month;
    });
  }, [filteredEvents, year, month]);

  const upcomingEvents = useMemo(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return filteredEvents
      .filter((e) => new Date(e.date + "T00:00:00") >= today)
      .sort((a, b) => a.date.localeCompare(b.date));
  }, [filteredEvents]);

  const prevMonth = () => {
    if (month === 0) {
      setYear(year - 1);
      setMonth(11);
    } else {
      setMonth(month - 1);
    }
  };

  const nextMonth = () => {
    if (month === 11) {
      setYear(year + 1);
      setMonth(0);
    } else {
      setMonth(month + 1);
    }
  };

  const goToToday = () => {
    setYear(now.getFullYear());
    setMonth(now.getMonth());
  };

  const { startPad, totalDays } = getMonthData(year, month);

  const dayEvents = useMemo(() => {
    const map: Record<number, HPREvent[]> = {};
    for (const e of monthEvents) {
      const day = new Date(e.date + "T00:00:00").getDate();
      if (!map[day]) map[day] = [];
      map[day].push(e);
    }
    return map;
  }, [monthEvents]);

  const categories: FilterCategory[] = [
    "all",
    "Cars Lapping",
    "Motorcycles Lapping",
    "Racing",
    "Special Event",
  ];

  return (
    <div>
      {/* Controls */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-2">
          <button
            onClick={prevMonth}
            className="p-2 bg-white/[0.04] hover:bg-white/[0.08] border border-border rounded-lg transition-colors"
            aria-label="Previous month"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <h2 className="text-xl font-bold w-48 text-center">
            {formatMonthYear(year, month)}
          </h2>
          <button
            onClick={nextMonth}
            className="p-2 bg-white/[0.04] hover:bg-white/[0.08] border border-border rounded-lg transition-colors"
            aria-label="Next month"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
          <button
            onClick={goToToday}
            className="ml-2 px-3 py-1.5 text-xs font-medium bg-white/[0.04] hover:bg-white/[0.08] border border-border rounded-lg transition-colors"
          >
            Today
          </button>
        </div>

        <div className="flex items-center gap-3">
          {/* Filter */}
          <div className="flex items-center gap-1 bg-white/[0.02] border border-border rounded-lg p-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                  filter === cat
                    ? "bg-accent text-white"
                    : "text-muted hover:text-white"
                }`}
              >
                {cat === "all" ? "All" : cat}
              </button>
            ))}
          </div>

          {/* View toggle */}
          <div className="flex items-center gap-1 bg-white/[0.02] border border-border rounded-lg p-1">
            <button
              onClick={() => setView("list")}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                view === "list"
                  ? "bg-white/10 text-white"
                  : "text-muted hover:text-white"
              }`}
            >
              List
            </button>
            <button
              onClick={() => setView("calendar")}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                view === "calendar"
                  ? "bg-white/10 text-white"
                  : "text-muted hover:text-white"
              }`}
            >
              Grid
            </button>
          </div>
        </div>
      </div>

      {/* Calendar Grid View */}
      {view === "calendar" && (
        <div className="bg-card border border-border rounded-2xl overflow-hidden mb-8">
          {/* Day headers */}
          <div className="grid grid-cols-7 border-b border-border">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
              <div
                key={d}
                className="py-3 text-center text-xs font-semibold text-muted uppercase tracking-wider"
              >
                {d}
              </div>
            ))}
          </div>

          {/* Day cells */}
          <div className="grid grid-cols-7">
            {Array.from({ length: startPad }).map((_, i) => (
              <div
                key={`pad-${i}`}
                className="min-h-[80px] sm:min-h-[100px] border-b border-r border-border bg-white/[0.01]"
              />
            ))}
            {Array.from({ length: totalDays }).map((_, i) => {
              const day = i + 1;
              const events = dayEvents[day] || [];
              const isToday =
                year === now.getFullYear() &&
                month === now.getMonth() &&
                day === now.getDate();

              return (
                <div
                  key={day}
                  className={`min-h-[80px] sm:min-h-[100px] border-b border-r border-border p-1.5 sm:p-2 ${
                    events.length > 0
                      ? "bg-white/[0.02] hover:bg-white/[0.04]"
                      : ""
                  } transition-colors`}
                >
                  <div
                    className={`text-xs font-medium mb-1 ${
                      isToday
                        ? "w-6 h-6 bg-accent rounded-full flex items-center justify-center text-white"
                        : "text-gray-400"
                    }`}
                  >
                    {day}
                  </div>
                  <div className="space-y-0.5">
                    {events.map((e) => (
                      <a
                        key={e.id}
                        href={MOTORSPORTREG_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`block text-[10px] sm:text-xs px-1.5 py-0.5 rounded truncate font-medium text-white/90 hover:text-white transition-colors ${CATEGORY_COLORS[e.category]}/80 hover:${CATEGORY_COLORS[e.category]}`}
                        style={{
                          backgroundColor:
                            e.category === "Cars Lapping"
                              ? "rgba(59,130,246,0.3)"
                              : e.category === "Motorcycles Lapping"
                                ? "rgba(249,115,22,0.3)"
                                : e.category === "Racing"
                                  ? "rgba(220,38,38,0.3)"
                                  : e.category === "Special Event"
                                    ? "rgba(234,179,8,0.3)"
                                    : "rgba(16,185,129,0.3)",
                        }}
                        title={`${e.title} — Click to register`}
                      >
                        {e.title}
                      </a>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* List View */}
      {view === "list" && (
        <div>
          {monthEvents.length === 0 ? (
            <div className="bg-card border border-border rounded-xl p-12 text-center">
              <Flag className="w-10 h-10 text-muted mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">
                No events in {formatMonthYear(year, month)}
              </h3>
              <p className="text-muted text-sm mb-6">
                {month < 3 || month > 9
                  ? "The active season runs April through October. Winter lapping days are weather-permitting."
                  : "No events match your current filter."}
              </p>
              <button
                onClick={() => {
                  setFilter("all");
                  setMonth(3);
                  setYear(2026);
                }}
                className="text-accent hover:text-accent-hover text-sm font-semibold transition-colors"
              >
                Jump to April 2026
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              {monthEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          )}
        </div>
      )}

      {/* Month quick-jump */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
        {Array.from({ length: 12 }).map((_, i) => {
          const m = new Date(2026, i, 1);
          const hasEvents = ALL_EVENTS.some((e) => {
            const d = new Date(e.date + "T00:00:00");
            return d.getFullYear() === 2026 && d.getMonth() === i;
          });
          return (
            <button
              key={i}
              onClick={() => {
                setMonth(i);
                setYear(2026);
              }}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                month === i && year === 2026
                  ? "bg-accent text-white"
                  : hasEvents
                    ? "bg-white/[0.04] text-gray-300 hover:bg-white/[0.08]"
                    : "text-muted/50 cursor-default"
              }`}
              disabled={!hasEvents && !(month === i && year === 2026)}
            >
              {m.toLocaleDateString("en-US", { month: "short" })}
            </button>
          );
        })}
      </div>
    </div>
  );
}
