export function formatSecondsToMinutes(input: number): string {
  const hours = Math.floor(input / 3600);
  const minutes = Math.floor((input % 3600) / 60);

  let result = "";

  if (hours > 0) {
    result += `${hours} hour${hours !== 1 ? "s" : ""}`;
  }

  if (minutes > 0) {
    if (hours > 0) {
      result += " ";
    }
    result += `${minutes} minute${minutes !== 1 ? "s" : ""}`;
  }

  return result;
}

export function formatSecondsToTime(input: number): string {
  const minutes = Math.floor(input / 60);
  const seconds = input % 60;

  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(seconds).padStart(2, '0');

  return `${formattedMinutes}:${formattedSeconds}`;
}
