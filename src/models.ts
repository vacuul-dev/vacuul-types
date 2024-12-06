export interface Machine {
  id: number; // Primary key, auto-increment
  createdAt: Date; // Timestamp for creation
  updatedAt: Date; // Timestamp for updates
  location: string; // Location of the machine
  status: "active" | "inactive"; // Enum for machine status
}

export interface Session {
  id: number; // Primary key, auto-increment
  createdAt: Date; // Timestamp for creation
  updatedAt: Date; // Timestamp for updates
  userId: number; // Foreign key to User
  machineId: number; // Foreign key to Machine
  machineSlotId: number; // Foreign key to MachineSlot
  treatmentId: number; // Foreign key to Treatment
  paymentId: number; // Foreign key to Payment
  state: "active" | "completed" | "cancelled"; // Enum for session state
}

export interface Treatment {
  id: number; // Primary key, auto-increment
  createdAt: Date; // Timestamp for creation
  updatedAt: Date; // Timestamp for updates
  sessionId: number; // Foreign key to Session
  settings: Record<string, unknown>; // JSON object for settings
  treatmentDate: Date; // Date of the treatment
  treatmentTime: string; // Time of the treatment (HH:mm:ss format)
  active: boolean; // Indicates if the treatment is active
}

export interface Payment {
  id: number; // Primary key, auto-increment
  userId: number; // Foreign key to User
  amount: number; // Decimal amount for the payment
  amountInCent: number; // Integer amount (in cents) for the payment
  paymentMethod: "stripe" | "paypal" | "other"; // Enum for payment method
  paymentStatus: "pending" | "completed" | "failed"; // Enum for payment status
  createdAt: Date; // Timestamp for creation
  updatedAt: Date; // Timestamp for updates
}

export interface MachineError {
  id: number; // Primary key, auto-increment
  machineId: number; // Foreign key to Machine
  errorDetails: Record<string, unknown>; // JSON object for error details
  loggedAt: Date; // Timestamp for when the error was logged
}

export interface MachineSlot {
  id: number; // Primary key, auto-increment
  createdAt: Date; // Timestamp for creation
  updatedAt: Date; // Timestamp for updates
  machineId: number; // Foreign key to Machine
  startTime: Date; // Start time of the session
  endTime: Date; // End time of the session
}
