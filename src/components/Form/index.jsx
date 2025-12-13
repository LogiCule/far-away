import { useState } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Form = ({ setItems }) => {
  const numList = Array.from({ length: 20 }, (_, i) => i + 1);
  const [formData, setFormData] = useState({ quantity: "1", description: "" });

  function handleSubmit(event) {
    event.preventDefault();
    if (!formData.description) return;
    
    setItems((items) => {
      const list = [
        ...items,
        { ...formData, id: Date.now(), packed: false }, // Use Date.now() for unique ids
      ];

      return list;
    });
    setFormData({ quantity: "1", description: "" });
  }

  return (
    <Card className="border-none shadow-xl bg-slate-800/50 backdrop-blur-sm overflow-hidden">
      <div className="bg-gradient-to-r from-amber-500/10 to-blue-600/10 p-1">
        <CardContent className="p-6 md:p-8 flex flex-col md:flex-row items-center gap-4 justify-between">
          <h3 className="text-lg md:text-xl font-medium text-slate-200 whitespace-nowrap">
            What do you need for your trip?
          </h3>
          
          <form className="flex w-full md:w-auto flex-col md:flex-row gap-3 items-stretch" onSubmit={handleSubmit}>
            <div className="w-full md:w-[100px]">
              <Select 
                value={formData.quantity.toString()} 
                onValueChange={(val) => setFormData(prev => ({...prev, quantity: val}))}
              >
                <SelectTrigger className="bg-slate-700/50 border-slate-600 text-slate-100 focus:ring-blue-500">
                  <SelectValue placeholder="Qty" />
                </SelectTrigger>
                <SelectContent className="bg-slate-800 border-slate-700 text-slate-100 max-h-60">
                  {numList.map((val) => (
                    <SelectItem key={val} value={val.toString()}>
                      {val}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <Input
              name="description"
              type="text"
              placeholder="Add Item..."
              className="flex-1 min-w-[200px] bg-slate-700/50 border-slate-600 text-slate-100 placeholder:text-slate-400 focus-visible:ring-blue-500"
              value={formData.description}
              onChange={(e) => setFormData(prev => ({...prev, description: e.target.value}))}
            />
            
            <Button type="submit" className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold px-8">
              <Plus className="mr-2 h-4 w-4" /> ADD
            </Button>
          </form>
        </CardContent>
      </div>
    </Card>
  );
};

export default Form;
