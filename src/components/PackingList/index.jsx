import { useEffect, useState } from "react";
import Item from "../Item";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Trash2 } from "lucide-react";

const PackingList = ({ items, setItems }) => {
  const [sortOrder, setSortOrder] = useState("id");

  const addPack = (id) => {
    setItems((prev) =>
      prev.map((item) => {
        return { ...item, packed: item.id == id ? !item.packed : item.packed };
      })
    );
    // Note: sorting is handled by useEffect on sortOrder, but we trigger re-sort on updates?
    // Actually the original code called sortData() manually. We should probably memoize the sorted list instead of mutating state.
    // However, keeping original structure to minimize logic bugs:
    // Original logic: call sortData() after update.
    // Better react pattern: derive sortedItems from items + sortOrder.
  };

  const delPack = (id) => {
    setItems((prev) => prev.filter((item) => item.id != id));
    // sortData(); // Original called sort. If we use derived state, we don't need this.
  };

  const clearList = () => {
    setItems([]);
    localStorage.removeItem("todo-list");
  };

  // Derived state for sorting to avoid infinite loops and complexity
  const sortedItems = [...items].sort((a, b) => {
    if (sortOrder === "description")
      return a.description.localeCompare(b.description);
    if (sortOrder === "packed")
      return Number(a.packed) - Number(b.packed);
    if (sortOrder === "quantity") 
      return b.quantity - a.quantity; // usually sort desc by quantity
    return a.id - b.id;
  });

  return (
    <Card className="flex-1 flex flex-col bg-slate-900/50 border-slate-800 shadow-inner overflow-hidden">
      <div className="flex-1 p-6 overflow-y-auto min-h-[400px]">
        {sortedItems.length === 0 ? (
          <div className="h-full flex flex-col items-center justify-center text-slate-500 opacity-60">
             <p className="text-xl">Your list is empty 📦</p>
             <p className="text-sm">Add some items to get started!</p>
          </div>
        ) : (
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {sortedItems.map((item) => (
              <Item
                item={item}
                handleChange={() => addPack(item.id)}
                handleRemove={() => delPack(item.id)}
                key={item.id}
              />
            ))}
          </ul>
        )}
      </div>

      <div className="bg-slate-800 p-4 border-t border-slate-700 flex flex-col sm:flex-row justify-center items-center gap-4 z-10">
        <div className="flex items-center gap-2">
           <span className="text-sm text-slate-400 uppercase font-bold tracking-wider">Sort By</span>
           <Select value={sortOrder} onValueChange={setSortOrder}>
            <SelectTrigger className="w-[180px] bg-slate-700 border-slate-600 text-slate-100">
              <SelectValue placeholder="Sort order" />
            </SelectTrigger>
            <SelectContent className="bg-slate-800 border-slate-700 text-slate-100">
              <SelectItem value="id">Input Order</SelectItem>
              <SelectItem value="description">Description</SelectItem>
              <SelectItem value="packed">Packed Status</SelectItem>
              <SelectItem value="quantity">Quantity</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {items.length > 0 && (
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="destructive" className="bg-red-900/50 hover:bg-red-600 text-red-200 border border-red-900">
                <Trash2 className="w-4 h-4 mr-2" /> Clear List
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-slate-900 border-slate-800 text-slate-100">
              <DialogHeader>
                <DialogTitle>Clear Packing List?</DialogTitle>
                <DialogDescription className="text-slate-400">
                  This action cannot be undone. This will permanently delete your packing list.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800">Cancel</Button>
                </DialogClose>
                <DialogClose asChild>
                  <Button variant="destructive" onClick={clearList}>Yes, Clear All</Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        )}
      </div>
    </Card>
  );
};

export default PackingList;
