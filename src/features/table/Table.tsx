"use client";

import React from "react";

const Table = ({ /* data, columns  */}) => {
  return (
    <div>
      table
      {/* <table>
        <thead>
          {columns.map((column) => {
            <th key={column.key}>{column.label}</th>;
          })}
        </thead>
        <tbody>
          {data.lenght === 0 ? (
            <tr>
              <td> no data </td>
            </tr>
          ) : (
            data.map((item) => (
              <tr key={item.id}>
                {
                  columns.map((column) => (
                    <td key={column.id}>
                      {column.extra ? column.extra(item) : item[column.key]}
                    </td>
                  ))
                }
              </tr>
            ))
          )}
        </tbody>
      </table> */}
    </div>
  );
};

export default Table;
