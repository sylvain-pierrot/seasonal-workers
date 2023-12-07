export function formatTimeElapsed(dateString: string): string {
  const currentDate: Date = new Date();
  const targetDate: Date = new Date(dateString);

  const timeDifference: number = currentDate.getTime() - targetDate.getTime();
  const minutes: number = Math.floor(timeDifference / (1000 * 60));
  const hours: number = Math.floor(timeDifference / (1000 * 60 * 60));
  const days: number = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  if (minutes < 60) {
    return `${minutes} minute${minutes !== 1 ? "s" : ""} ago`;
  } else if (hours < 24) {
    return `${hours} hour${hours !== 1 ? "s" : ""} ago`;
  } else {
    return `${days} day${days !== 1 ? "s" : ""} ago`;
  }
}

export function formatTimeElapsedFrench(dateString: string): string {
  const currentDate: Date = new Date();
  const targetDate: Date = new Date(dateString);

  const timeDifference: number = currentDate.getTime() - targetDate.getTime();
  const minutes: number = Math.floor(timeDifference / (1000 * 60));
  const hours: number = Math.floor(timeDifference / (1000 * 60 * 60));
  const days: number = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  if (minutes < 60) {
    return `Il y a ${minutes} minute${minutes !== 1 ? "s" : ""}`;
  } else if (hours < 24) {
    return `Il y a ${hours} heure${hours !== 1 ? "s" : ""}`;
  } else {
    return `Il y a ${days} jour${days !== 1 ? "s" : ""}`;
  }
}
