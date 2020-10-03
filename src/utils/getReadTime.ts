export default function getReadTime(text: string): number {
  const textLenght = text.split(' ').length;

  if (textLenght > 0) {
    const value = Math.ceil(textLenght / 220);

    return value;
  }

  return 1;
}
