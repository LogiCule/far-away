import { Progress } from "@/components/ui/progress";

const Stats = ({ items }) => {
  if (items.length === 0)
    return (
      <footer className="w-full py-6 text-center bg-slate-900 border-t border-slate-800 text-slate-400 italic">
        <p>Start adding some items to your packing list 🚀</p>
      </footer>
    );

  const total = items.length;
  const done = items.filter((item) => item.packed).length;
  const percent = Math.round((done * 100) / total);

  return (
    <footer className="w-full py-6 bg-slate-900 border-t border-slate-800 flex flex-col items-center justify-center gap-3 px-8">
       <div className="w-full max-w-md space-y-2">
         <div className="flex justify-between text-sm font-medium">
            <span className="text-slate-400">Packing Progress</span>
            <span className={percent === 100 ? "text-green-400" : "text-blue-400"}>{percent}%</span>
         </div>
         <Progress value={percent} className="h-2 bg-slate-800" />
       </div>
      <p className="text-slate-400 text-sm">
        {percent === 100 
          ? "🎉 You got everything! Ready to go ✈️"
          : `You have ${total} items on your list, and you already packed ${done} (${percent}%)`
        }
      </p>
    </footer>
  );
};

export default Stats;
