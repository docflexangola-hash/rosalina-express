"use client";

import { MaterialIcon } from "@/components/MaterialIcon";
import { bookingContent } from "@/content/booking";
import type { SeatMapProps } from "./types";

const seatStatus = (
  n: number,
  occupied: string[],
  priority: string[],
  selected: number | null,
): "available" | "selected" | "occupied" | "priority" => {
  const num = String(n).padStart(2, "0");
  if (selected === n) return "selected";
  if (occupied.includes(num)) return "occupied";
  if (priority.includes(num)) return "priority";
  return "available";
};

const seatClasses: Record<string, string> = {
  available:
    "bg-surface-container-lowest text-on-surface hover:bg-secondary-fixed hover:text-on-secondary",
  selected: "bg-primary-container text-on-primary scale-110 shadow-[4px_4px_0px_0px_#0c1a3b]",
  occupied:
    "bg-surface-dim text-on-surface-variant border-2 border-outline-variant cursor-not-allowed line-through opacity-50",
  priority: "bg-surface-container-lowest text-secondary border-2 border-dashed border-secondary",
};

export function SeatMap({ selected, onSelect }: SeatMapProps) {
  const { seatMap } = bookingContent;
  const total = seatMap.rows * seatMap.cols;

  const visibleRows = 9;
  const showCollapsed = total > visibleRows * seatMap.cols;

  return (
    <div className="bg-surface-container-lowest border-2 border-on-surface shadow-[6px_6px_0px_0px_#0c1a3b]">
      <div className="bg-on-background text-white border-b-2 border-on-surface px-6 py-4 flex flex-wrap items-center gap-3">
        <MaterialIcon name="airline_seat_recline_normal" className="text-base" />
        <span className="font-label-code text-label-code uppercase">
          {seatMap.header}
        </span>
        <span className="ml-auto bg-primary-container border-2 border-on-surface px-3 py-1 font-label-code text-label-code uppercase text-on-primary shadow-[2px_2px_0px_0px_#0c1a3b]">
          {seatMap.layoutBadge}
        </span>
      </div>

      <div className="p-6">
        <div className="grid grid-cols-5 gap-2 mb-4 font-label-code text-label-code uppercase text-on-surface-variant text-center">
          {seatMap.columns.map((c, i) => (
            <span key={i}>{c}</span>
          ))}
        </div>

        <div className="flex flex-wrap gap-4 mb-6 font-label-code text-label-code uppercase">
          {seatMap.legend.map((l) => (
            <span key={l.label} className="flex items-center gap-2">
              <span
                className={`w-6 h-6 border-2 border-on-surface ${seatClasses[l.style]}`}
              >
                {l.style === "selected" && (
                  <span className="flex items-center justify-center h-full">
                    <MaterialIcon name="check" className="text-xs" />
                  </span>
                )}
              </span>
              {l.label}
            </span>
          ))}
        </div>

        <div className="bg-surface-bright border-2 border-on-surface p-4">
          <div className="flex items-center justify-between mb-4">
            <span className="font-label-code text-label-code uppercase text-on-surface-variant flex items-center gap-2">
              <MaterialIcon name="sports_score" className="text-sm" />
              {seatMap.driverCabin}
            </span>
            <span className="bg-tertiary text-on-tertiary border-2 border-on-surface px-3 py-1 font-label-code text-label-code uppercase">
              {seatMap.driverBadge}
            </span>
          </div>
          <div className="flex justify-between mb-2 font-label-code text-label-code uppercase text-on-surface-variant text-sm">
            <span>
              <MaterialIcon name="meeting_room" className="text-xs inline mr-1" />
              {seatMap.doorLabel}
            </span>
            <span>RETROVISOR</span>
          </div>

          <div className="mt-4 space-y-2">
            {Array.from({ length: visibleRows }, (_, rowIdx) => {
              return (
                <div key={rowIdx} className="grid grid-cols-5 gap-2 items-center">
                  {Array.from({ length: seatMap.cols }, (_, colIdx) => {
                    const n = rowIdx * seatMap.cols + colIdx + 1;
                    if (n > total) return null;
                    const status = seatStatus(n, seatMap.occupied, seatMap.priority, selected);
                    return (
                      <button
                        key={colIdx}
                        type="button"
                        disabled={status === "occupied"}
                        onClick={() => status !== "occupied" && onSelect(n)}
                        title={`Assento ${String(n).padStart(2, "0")} - ${status === "selected" ? "Selecionado" : status === "occupied" ? "Ocupado" : "Disponível"}`}
                        className={`aspect-square border-2 border-on-surface flex items-center justify-center font-label-code text-label-code uppercase transition-all ${seatClasses[status]}`}
                      >
                        {status === "selected" ? (
                          <MaterialIcon name="check" className="text-sm" />
                        ) : (
                          String(n).padStart(2, "0")
                        )}
                      </button>
                    );
                  })}
                </div>
              );
            })}

            {showCollapsed && (
              <div className="text-center py-2 font-label-code text-label-code uppercase text-on-surface-variant">
                • • • FILEIRAS 09 A {seatMap.rows} DISPONÍVEIS • • •
              </div>
            )}
          </div>

          <div className="mt-4 flex flex-wrap gap-3">
            {seatMap.rearAmenities.map((a) => (
              <div
                key={a.label}
                className="flex items-center gap-2 bg-surface-container-high border-2 border-on-surface px-3 py-2 font-label-code text-label-code uppercase text-on-surface"
              >
                <MaterialIcon name={a.icon} className="text-sm text-secondary" />
                {a.label}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 bg-surface-container-high border-2 border-on-surface p-3 font-body-sm text-body-sm text-on-surface-variant flex items-start gap-2">
          <MaterialIcon name="info" className="text-sm flex-shrink-0 mt-0.5 text-primary-container" />
          <span>{bookingContent.passenger.seatNote}</span>
        </div>
      </div>
    </div>
  );
}