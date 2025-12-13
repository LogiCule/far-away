import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const Item = ({ item, handleChange, handleRemove }) => {
  return (
    <li className="flex items-center justify-between gap-4 bg-slate-800/80 p-4 rounded-lg border border-slate-700 shadow-sm transition-all hover:bg-slate-700/80 hover:scale-[1.01] group">
      <div className="flex items-center gap-4 overflow-hidden">
        <Checkbox 
          checked={item.packed} 
          onCheckedChange={handleChange}
          className="h-6 w-6 border-slate-500 data-[state=checked]:bg-green-500 data-[state=checked]:border-green-500"
        />
        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 overflow-hidden">
          <Badge variant="outline" className="w-fit text-amber-400 border-amber-500/50 bg-amber-500/10">
            {item.quantity}
          </Badge>
          <span 
            className={`text-lg font-quicksand truncate transition-all ${
              item.packed 
                ? "text-slate-500 line-through decoration-2 decoration-slate-500" 
                : "text-slate-100"
            }`}
          >
            {item.description}
          </span>
        </div>
      </div>
      <Button 
        variant="ghost" 
        size="icon" 
        onClick={handleRemove}
        className="text-slate-500 hover:text-red-400 hover:bg-red-400/10 opacity-70 group-hover:opacity-100 transition-opacity"
      >
        <X className="h-5 w-5" />
      </Button>
    </li>
  );
};

export default Item;
