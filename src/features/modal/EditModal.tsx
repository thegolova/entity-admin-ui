"use client";

import { Dialog } from "@headlessui/react";
import { useState, useEffect } from "react";
import { FieldConfig } from "./types";

type EditModalProps<T> = {
  isOpen: boolean;
  onClose: () => void;
  entity: T | null;
  fields: FieldConfig[];
  onSave: (updated: T) => void;
};

function getValue(obj: any, path: string) {
  return path.split(".").reduce((acc, key) => acc?.[key], obj);
}

function setValue(obj: any, path: string, value: any) {
  const keys = path.split(".");
  const last = keys.pop()!;
  const target = keys.reduce((acc, key) => {
    if (!acc[key]) acc[key] = {};
    return acc[key];
  }, obj);
  target[last] = value;
  return { ...obj };
}

export function EditModal<T>({
  isOpen,
  onClose,
  entity,
  fields,
  onSave,
}: EditModalProps<T>) {
  const [form, setForm] = useState<any>(entity);

  useEffect(() => {
    setForm(entity);
  }, [entity]);

  if (!isOpen || !entity) return null;

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="mx-auto max-w-md w-full rounded bg-white p-6 shadow-lg">
          <Dialog.Title className="text-lg font-bold mb-4">
            Edit Entity
          </Dialog.Title>

          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              onSave(form);
              onClose();
            }}
          >
            {fields.map((f) => (
              <div key={f.name} className="flex flex-col gap-1">
                <label className="text-sm font-medium">{f.label}</label>
                {f.type === "checkbox" ? (
                  <input
                    type="checkbox"
                    checked={Boolean(getValue(form, f.name))}
                    onChange={(e) =>
                      setForm(setValue(form, f.name, e.target.checked))
                    }
                  />
                ) : (
                  <input
                    type={f.type}
                    value={String(getValue(form, f.name) ?? "")}
                    onChange={(e) =>
                      setForm(setValue(form, f.name, e.target.value))
                    }
                    className="border rounded px-2 py-1 text-sm"
                  />
                )}
              </div>
            ))}

            <div className="flex justify-end gap-2 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded border text-sm"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 rounded bg-blue-600 text-white text-sm"
              >
                Save
              </button>
            </div>
          </form>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
