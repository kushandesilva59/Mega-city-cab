'use client'
import React, { useState } from "react";
import styles from "./Table.module.css";

const Table = ({ columns, data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEmail, setSelectedEmail] = useState("");

  // Function to handle Edit button click
  const handleEditClick = (email) => {
    setSelectedEmail(email); // Set the selected email
    setIsModalOpen(true); // Open the modal
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedEmail("");
  };

  return (
    <div>
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr className={styles.tr}>
              {columns.map((col, index) => (
                <th key={index} className={styles.th}>
                  {col}
                </th>
              ))}
              <th className={styles.th}>Options</th> {/* Options column */}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex} className={styles.tr}>
                {columns.map((col, colIndex) => (
                  <td className={styles.td} key={colIndex}>
                    {row[col]}
                  </td>
                ))}
                <td className={styles.td}>
                  {/* Edit button */}
                  <button
                    className={styles.editButton}
                    onClick={() => handleEditClick(row.Email)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <h3>Edit Row</h3>
            <p>Email: {selectedEmail}</p>
            {/* Additional inputs or actions */}
            <button className={styles.closeButton} onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Table;
