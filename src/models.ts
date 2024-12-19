export interface Machine {
  id: string;
  createdAt: string;
  updatedAt: string;

  latitude: number;
  longitude: number;
  state: "active" | "inactive";

  location: string | null;
}

export interface Appointment {
  id: string;
  createdAt: string;
  updatedAt: string;

  userId: string;
  machineId: string;
  timeSlotId: string;
  therapyId: string;
  paymentId: string | null;
  state: "pending" | "acquired" | "completed" | "cancelled";
}

export interface Therapy {
  id: string;
  createdAt: string;
  updatedAt: string;

  appointmentId: string;
  settings: Record<string, any>;
  active: boolean;
}

export interface Payment {
  id: string;
  createdAt: string;
  updatedAt: string;

  userId: string;

  amountInCents: number;
  paymentState: "pending" | "completed" | "failed";
  stripePaymentMethodId: string;
}

export interface MachineError {
  id: string;
  createdAt: string;
  updatedAt: string;

  machineId: string;
  errorDetails: string;
  loggedAt: string;
}

export interface TimeSlot {
  id: string;
  createdAt: string;
  updatedAt: string;

  machineId: string;
  startTime: string;
  endTime: string;
  state: "reserved" | "assigned";
}

export interface Feedback {
  id: string;
  createdAt: string;
  updatedAt: string;

  appointmentId: string;
  rating: number;
  feedback: string;
}
