import { appTexts } from "@ra/constants/apptexts";

export default function UnderConstruction() {
  return (
    <div className="flex h-full min-h-[60vh] flex-col items-center justify-center gap-2 px-6 text-center">
      <h1 className="text-2xl font-semibold text-slate-800">
        {appTexts.underConstruction.title}
      </h1>
      <p className="text-sm text-slate-500">{appTexts.underConstruction.message}</p>
    </div>
  );
}
