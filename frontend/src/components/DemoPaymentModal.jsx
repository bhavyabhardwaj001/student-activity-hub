import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./DemoPaymentModal.css";

function randomTicketId() {
  return "EVT" + Math.floor(1000 + Math.random() * 9000);
}

export default function DemoPaymentModal({
  open,
  onClose,
  qrImage = "/assets/qr-demo.jpeg",
  eventId,
  onRegister,
  onSuccess,
}) {
  const [success, setSuccess] = useState(false);
  const [ticketId, setTicketId] = useState("");

  const handlePaid = async () => {
    if (onRegister && eventId) {
      await onRegister(eventId);
    }
    setSuccess(true);
    const id = randomTicketId();
    setTicketId(id);
    setTimeout(() => {
      setSuccess(false);
      setTicketId("");
      if (onSuccess) onSuccess(id);
      onClose();
    }, 1800);
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}
          <motion.div
            className="demo-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, backdropFilter: "blur(6px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
          />
          {/* Modal */}
          <motion.div
            className="demo-modal-glass"
            initial={{ opacity: 0, scale: 0.85, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 40 }}
            transition={{ type: "spring", stiffness: 320, damping: 28 }}
          >
            {!success ? (
              <>
                <h2 className="demo-modal-title">Scan & Pay</h2>
                <img
                  src={qrImage}
                  alt="Demo QR"
                  className="demo-modal-qr"
                  draggable={false}
                />
                <div className="demo-modal-desc">Use any UPI app to pay</div>
                <motion.button
                  className="demo-modal-btn"
                  whileHover={{
                    scale: 1.04,
                    background: "linear-gradient(90deg,#60a5fa,#2563eb)",
                  }}
                  whileTap={{ scale: 0.97 }}
                  onClick={handlePaid}
                >
                  I have paid
                </motion.button>
              </>
            ) : (
              <motion.div
                className="demo-modal-success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
              >
                <div className="demo-success-icon">✅</div>
                <div className="demo-success-title">Payment Successful</div>
                <div className="demo-success-desc">
                  You are registered for the event
                </div>
                <div className="demo-ticket-id">
                  Ticket ID: <span>{ticketId}</span>
                </div>
              </motion.div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
