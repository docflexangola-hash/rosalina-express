import { MaterialIcon } from "@/components/MaterialIcon";
import { rastreamentoContent } from "@/content/rastreamento";

const corClasses: Record<string, string> = {
  primary: "bg-primary-container text-on-primary",
  tertiary: "bg-tertiary text-on-tertiary",
  secondary: "bg-secondary text-on-secondary",
};

export function RadarTelemetria() {
  const { radar } = rastreamentoContent;
  return (
    <section className="w-full bg-surface-container-high border-b-4 border-on-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="flex flex-wrap items-center justify-between mb-6 gap-4">
          <div className="flex items-center gap-2 font-label-code text-label-code uppercase text-on-surface-variant">
            <MaterialIcon name={radar.sublabelIcon} className="text-sm" />
            <span>{radar.sublabel}</span>
          </div>
          <div className="flex items-center gap-4 font-label-code text-label-code uppercase text-on-surface-variant">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-primary-container rounded-full animate-ping" />
              {radar.gpsStatus}
            </span>
            <span>{radar.pingStatus}</span>
          </div>
        </div>

        <h3 className="font-headline-lg text-headline-lg uppercase text-on-surface mb-6">
          {radar.title}
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8 bg-surface-container-lowest border-2 border-on-surface shadow-[6px_6px_0px_0px_#0c1a3b] p-6">
            <div className="flex items-center justify-between mb-6 font-label-code text-label-code uppercase text-on-surface-variant">
              <span>{radar.corridor}</span>
              <span>
                {radar.updateLabel}{" "}
                <span className="text-primary-container">há 14 segundos</span>
              </span>
            </div>

            <div className="relative mb-8">
              <div className="h-8 border-b-2 border-on-surface relative flex items-center">
                {radar.markers.map((m, i) => (
                  <span
                    key={i}
                    className="absolute font-label-code text-label-code uppercase text-on-surface-variant"
                    style={{ left: `${(i / (radar.markers.length - 1)) * 100}%`, transform: "translateX(-50%)" }}
                  >
                    {m.label}
                  </span>
                ))}
                <span className="absolute left-0 font-label-code text-label-code uppercase text-primary-container font-black">
                  LUA
                </span>
                <span className="absolute right-0 font-label-code text-label-code uppercase text-primary-container font-black">
                  BEN
                </span>
              </div>
              <div
                className="absolute top-1/2 -translate-y-1/2 h-6 w-6 rounded-full bg-primary-container border-2 border-on-primary flex items-center justify-center shadow-[4px_4px_0px_0px_#0c1a3b] animate-pulse"
                style={{ left: "55%" }}
              >
                <MaterialIcon name="navigation" className="text-white text-sm animate-spin" />
              </div>
              <div className="mt-8 bg-tertiary border-2 border-on-surface p-4">
                <div className="font-label-code text-label-code uppercase text-primary-fixed mb-1">
                  {radar.coachOverlay}
                </div>
                <div className="font-label-code text-label-code uppercase text-on-tertiary">
                  {radar.sensorOverlay}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {radar.fleet.map((f, i) => (
                <div
                  key={i}
                  className="bg-surface-container-low border-2 border-on-surface shadow-[2px_2px_0px_0px_#0c1a3b] p-4"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`${corClasses[f.statusCor]} border-2 border-on-surface px-2 py-0.5 font-label-code text-label-code uppercase text-xs`}>
                      {f.status}
                    </span>
                    <span className="font-label-code text-label-code uppercase text-on-surface-variant">
                      {f.km}
                    </span>
                  </div>
                  <div className="font-headline-sm text-headline-sm uppercase text-on-surface">
                    {f.name}
                  </div>
                  <div className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                    {f.route}
                  </div>
                  <div className="mt-2 flex justify-between font-label-code text-label-code uppercase text-on-surface-variant">
                    <span>{f.speed}</span>
                    <span>{f.eta}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 bg-surface-container-lowest border-2 border-on-surface shadow-[6px_6px_0px_0px_#0c1a3b]">
            <div className="bg-primary-container text-on-primary border-b-2 border-on-surface px-6 py-4 flex items-center justify-between">
              <span className="font-label-code text-label-code uppercase">
                {radar.telemetry.header}
              </span>
              <span className="bg-on-primary border-2 border-primary-container px-2 py-0.5 font-label-code text-label-code uppercase text-xs text-primary-container">
                {radar.telemetry.headerBadge}
              </span>
            </div>

            <div className="p-6 space-y-5">
              {radar.telemetry.gauges.map((g, i) => (
                <div key={i}>
                  <div className="flex items-center justify-between">
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      {g.label}
                    </span>
                    <span className="font-headline-md text-headline-md text-primary-container">
                      {g.value}
                      <span className="font-label-code text-label-code uppercase text-on-surface-variant ml-1">
                        {g.unit}
                      </span>
                    </span>
                  </div>
                  {g.bar !== undefined && (
                    <div className="mt-1 h-2 bg-surface-container border-2 border-on-surface">
                      <div
                        className="h-full bg-primary-container"
                        style={{ width: `${g.bar}%` }}
                      />
                    </div>
                  )}
                  {g.note && (
                    <div className="font-label-code text-label-code uppercase text-on-surface-variant text-xs mt-1">
                      {g.note}
                    </div>
                  )}
                </div>
              ))}

              <div className="border-t-2 border-on-surface pt-4 space-y-2 font-body-sm text-body-sm">
                <div className="flex items-center gap-2 text-on-surface-variant">
                  <span className="font-label-code text-label-code uppercase">
                    {radar.telemetry.driver}
                  </span>
                  <span className="text-on-surface">{radar.telemetry.driverName}</span>
                </div>
                <div className="flex items-center gap-2 text-on-surface-variant">
                  <span className="font-label-code text-label-code uppercase">
                    {radar.telemetry.assentos}
                  </span>
                  <span className="text-primary-container">{radar.telemetry.assentosValue}</span>
                </div>
                <div className="flex items-center gap-2 text-on-surface-variant">
                  <span className="font-label-code text-label-code uppercase">
                    {radar.telemetry.ultimoCheckpoint}
                  </span>
                  <span className="text-on-surface">{radar.telemetry.ultimoCheckpointValue}</span>
                </div>
                <div className="flex items-center gap-2 text-on-surface-variant">
                  <span className="font-label-code text-label-code uppercase">
                    {radar.telemetry.proximaParagem}
                  </span>
                  <span className="text-on-surface">{radar.telemetry.proximaParagemValue}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 bg-surface-container-lowest border-2 border-on-surface shadow-[6px_6px_0px_0px_#0c1a3b] p-6">
          <div className="flex items-center justify-between mb-4">
            <span className="font-headline-md text-headline-md uppercase text-on-surface">
              {radar.timelineHeader}
            </span>
            <span className="font-label-code text-label-code uppercase text-on-surface-variant">
              {radar.corridor}
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {radar.checkpoints.map((c, i) => (
              <div
                key={i}
                className={`border-2 border-on-surface p-4 ${
                  c.future ? "opacity-60 bg-surface-container-low" : "bg-surface-container-lowest"
                }`}
              >
                <div className="font-label-code text-label-code uppercase text-primary-container mb-2">
                  {c.time}
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  {c.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}