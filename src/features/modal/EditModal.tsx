"use client";

import { Dialog } from "@headlessui/react";
import { useState, useEffect } from "react";
import { EditModalProps } from "./types";
import { getValue, setValue } from "@/shared/utils";
import { fromDateInputValue, toDateInputValue } from "@/shared/utils/date";



export function EditModal<T>({
  isOpen,
  onClose,
  entity,
  fields,
  onSave,
}: EditModalProps<T>) {
  const [form, setForm] = useState<any>(entity);
  console.log({ entity, fields });
  useEffect(() => {
    setForm(entity);
  }, [entity]);

  if (!isOpen || !entity) return null;

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="mx-auto max-w-md w-full rounded-md bg-white p-6 shadow-lg">
          <Dialog.Title className="text-2xl font-bold mb-4">Edit</Dialog.Title>

          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              onSave(form);
              onClose();
            }}
          >
            {fields.map((f) => {
              if (f.type === "checkbox") {
                <div key={f.name} className="flex flex-col gap-1">
                  <div className="flex justify-between items-center">
                    <label className="text-base font-medium py-2">
                      {f.label}
                    </label>

                    <input
                      type="checkbox"
                      checked={Boolean(getValue(form, f.name))}
                      onChange={(e) =>
                        setForm(setValue(form, f.name, e.target.checked))
                      }
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 mr-1"
                    />
                  </div>
                </div>;
              }
              if (f.type === "date") {
                const raw = getValue(form, f.name) as string | undefined;
                return (
                  <div key={f.name} className="flex flex-col gap-1">
                    <div className="flex justify-between items-center">
                      <label className="text-base font-medium">{f.label}</label>
                      <input
                        type="date"
                        value={toDateInputValue(raw ?? null)}
                        onChange={(e) =>
                          setForm(
                            setValue(
                              form,
                              f.name,
                              fromDateInputValue(e.target.value)
                            )
                          )
                        }
                        className="border-2 border-gray-300 hover:border-blue-500 rounded px-2 py-1 text-sm"
                      />
                    </div>
                  </div>
                );
              }
              return (
                <div key={f.name} className="flex flex-col gap-1">
                  <div className="flex justify-between items-center">
                    <label className="text-base font-medium">{f.label}</label>
                    <input
                      type={f.type}
                      value={String(getValue(form, f.name) ?? "")}
                      onChange={(e) =>
                        setForm(setValue(form, f.name, e.target.value))
                      }
                      className="border-2 border-gray-300 hover:border-blue-500 rounded px-2 py-1 text-sm"
                    />
                  </div>
                </div>
              );
            })}

            {/* 
<div key={f.name} className="flex flex-col gap-1">
                {f.type === "checkbox" ? (
                  <div className="flex justify-between items-center">
                    <label className="text-base font-medium py-2">
                      {f.label}
                    </label>

                    <input
                      type="checkbox"
                      checked={Boolean(getValue(form, f.name))}
                      onChange={(e) =>
                        setForm(setValue(form, f.name, e.target.checked))
                      }
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 mr-1"
                    />
                  </div>
                ) : (
                  <div className="flex justify-between items-center">
                    <label className="text-base font-medium">{f.label}</label>
                    <input
                      type={f.type}
                      value={String(getValue(form, f.name) ?? "")}
                      onChange={(e) =>
                        setForm(setValue(form, f.name, e.target.value))
                      }
                      className="border-2 border-gray-300 hover:border-blue-500 rounded px-2 py-1 text-sm"
                    />
                  </div>
                )}
              </div> */}

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
