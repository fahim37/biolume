"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DataTable } from "@/components/data-table";
import { AddDataModal } from "@/components/add-data-modal";
import { EditDataModal } from "@/components/edit-data-modal";
import { toast } from "sonner";
import { Plus } from "lucide-react";

interface DataItem {
  _id: string;
  title?: string;
  image: string;
  type: string;
  createdAt: string;
  updatedAt: string;
}

const dataTypes = [
  { value: "service", label: "Services" },
  { value: "project", label: "Projects" },
  { value: "Client", label: "Clients" },
  { value: "brandPartner", label: "Brand Partners" },
];

export default function DataPage() {
  const [data, setData] = useState<DataItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("service");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editItem, setEditItem] = useState<DataItem | null>(null);
  const { data: session } = useSession();
  const token = session?.user?.accessToken;

  const fetchData = async (type: string) => {
    setLoading(true);
    try {
      const response = await fetch(
        `http://localhost:5000/api/v1/data?type=${type}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const result = await response.json();
      if (result.success) {
        setData(result.data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      toast.error("Failed to fetch data");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const response = await fetch(`http://localhost:5000/api/v1/data/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${(session?.user as any)?.accessToken}`,
        },
      });

      if (response.ok) {
        toast.success("Item deleted successfully");
        fetchData(activeTab);
      }
    } catch (error) {
      console.error("Error deleting item:", error);
      toast.error("Failed to delete item");
    }
  };

  const handleEdit = (item: DataItem) => {
    setEditItem(item);
  };

  useEffect(() => {
    if (session?.user) {
      fetchData(activeTab);
    }
  }, [activeTab, session]);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Data Management</h2>
          <p className="text-muted-foreground">
            Manage your services, projects, clients, and brand partners
          </p>
        </div>
        <Button onClick={() => setIsAddModalOpen(true)}>
          <Plus className="mr-2 h-4 w-4" />
          Add Data
        </Button>
      </div>

      <Tabs
        value={activeTab}
        onValueChange={setActiveTab}
        className="space-y-4"
      >
        <TabsList className="grid w-full grid-cols-4">
          {dataTypes.map((type) => (
            <TabsTrigger key={type.value} value={type.value}>
              {type.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {dataTypes.map((type) => (
          <TabsContent
            key={type.value}
            value={type.value}
            className="space-y-4"
          >
            <Card>
              <CardHeader>
                <CardTitle>{type.label}</CardTitle>
                <CardDescription>
                  Manage your {type.label.toLowerCase()} data
                </CardDescription>
              </CardHeader>
              <CardContent>
                <DataTable
                  data={data}
                  loading={loading}
                  onDelete={handleDelete}
                  onEdit={handleEdit}
                />
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>

      <AddDataModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onSuccess={() => {
          fetchData(activeTab);
          setIsAddModalOpen(false);
        }}
        type={activeTab}
      />

      {editItem && (
        <EditDataModal
          isOpen={!!editItem}
          onClose={() => setEditItem(null)}
          onSuccess={() => {
            fetchData(activeTab);
            setEditItem(null);
          }}
          item={editItem}
        />
      )}
    </div>
  );
}
