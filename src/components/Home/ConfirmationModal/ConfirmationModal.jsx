import React from 'react';
import './ConfirmationModal.css'; // CSS for modal styling

const ConfirmationModal = ({ show, onConfirm, onCancel }) => {
    if (!show) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Are you sure you want to delete your profile?</h2>
                <p>This action cannot be undone.</p>
                <div className="modal-actions">
                    <button onClick={onCancel} className="modal-cancel">Cancel</button>
                    <button onClick={onConfirm} className="modal-confirm">Yes, Delete</button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;
