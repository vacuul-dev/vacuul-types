export interface Machine {
  id: number;
  createdAt: Date;
  updatedAt: Date;

  latitude: number;
  longitude: number;
  state: "active" | "inactive";

  location: string | null;
}

export interface Appointment {
  id: number;
  createdAt: Date;
  updatedAt: Date;

  userId: number;
  machineId: number;
  timeSlotId: number;
  therapyId: number;
  paymentId: number | null;
  state: "pending" | "acquired" | "completed" | "cancelled";
}

export interface Therapy {
  id: number;
  createdAt: Date;
  updatedAt: Date;

  appointmentId: number;
  settings: Record<string, unknown>;
  active: boolean;
}

export interface Payment {
  id: number;
  createdAt: Date;
  updatedAt: Date;

  userId: number;

  amountInCents: number;
  paymentState: "pending" | "completed" | "failed";
  stripePaymentMethodId: string;
}

export interface MachineError {
  id: number;
  createdAt: Date;
  updatedAt: Date;

  machineId: number;
  errorDetails: string;
  loggedAt: Date;
}

export interface TimeSlot {
  id: number;
  createdAt: Date;
  updatedAt: Date;

  machineId: number;
  startTime: Date;
  endTime: Date;
  state: "reserved" | "assigned";
}
