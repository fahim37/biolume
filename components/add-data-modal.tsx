"use client";

import type React from "react";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

interface AddDataModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
  type: string;
}

const dataTypes = ["service", "project", "Client", "brandPartner"];
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const formatTypeName = (str: any) => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

export function AddDataModal({
  isOpen,
  onClose,
  onSuccess,
  type,
}: AddDataModalProps) {
  const [title, setTitle] = useState("");
  const [selectedType, setSelectedType] = useState(type);
  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const { data: session } = useSession();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!image) {
      toast.error("Please select an image");
      return;
    }

    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("type", selectedType);
      formData.append("image", image);

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/add/data`,
        {
          method: "POST",
          headers: {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            Authorization: `Bearer ${(session?.user as any)?.accessToken}`,
          },
          body: formData,
        }
      );

      const result = await response.json();

      if (result.success) {
        toast.success("Data added successfully");
        setTitle("");
        setImage(null);
        onSuccess();
      } else {
        throw new Error(result.message || "Failed to add data");
      }
    } catch (error) {
      console.error("Error adding data:", error);
      toast.error("Failed to add data");
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setTitle("");
    setImage(null);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Data</DialogTitle>
          <DialogDescription>
            Add a new item to your data collection
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="title" className="text-right">
                Title
              </Label>
              <Input
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="col-span-3"
                placeholder="Enter title"
                required
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="type" className="text-right">
                Type
              </Label>
              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger className="col-span-3 w-full">
                  <SelectValue placeholder="Select a value" />
                </SelectTrigger>
                <SelectContent>
                  {dataTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {formatTypeName(type)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="image" className="text-right">
                Image
              </Label>
              <Input
                id="image"
                type="file"
                accept="image/*"
                onChange={(e) => setImage(e.target.files?.[0] || null)}
                className="col-span-3"
                required
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={handleClose}>
              Cancel
            </Button>
            <Button type="submit" disabled={loading}>
              {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Add Data
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
