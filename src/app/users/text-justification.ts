const SPACE = ' ';

export function fullJustify(words: string[], maxWidth: number): string[] {

  const lines: string[] = [];
  let spaceCount = maxWidth,
    spaceIndexes: { index: number, spacesNumber: number }[] = [],
    textLine = '';

  for (let i1 = 0; i1 < words.length; i1++) {
    let word = words[i1];
    const newLine = spaceIndexes.length === 0;
    const token = (newLine ? '' : SPACE) + word;
    const spaceLeft = spaceCount - token.length >= 0;
    if (spaceLeft) {
      spaceCount -= token.length;
      textLine += token;
      spaceIndexes.push({
        index: textLine.length,
        spacesNumber: 0
      });

      if (i1 === words.length - 1) {
        lines.push(textLine + SPACE.repeat(spaceCount));
      }
    } else {
      let justifiedLine = '';

      if (spaceCount > 0) {

        if (spaceIndexes.length -1 > 0) {
          for (let i = 0; spaceCount - i > 0; i++) {
            spaceIndexes[i % (spaceIndexes.length - 1)].spacesNumber += 1;
          }
        }

        let i = 0;
        while (i < spaceIndexes.length) {
          if (i === 0) {
            justifiedLine += (textLine.substring(0, spaceIndexes[i].index) + SPACE.repeat(spaceIndexes[i].spacesNumber));
          } else {
            justifiedLine += (SPACE.repeat(spaceIndexes[i].spacesNumber) + textLine.substring(spaceIndexes[i - 1].index, spaceIndexes[i].index));
          }

          i++;
        }

      } else {
        justifiedLine = textLine;
      }

      // justifiedLine = textLine.slice(0, spaceIndexes[0]) + justifiedLine;
      lines.push(justifiedLine);

      // init
      spaceCount = maxWidth - word.length;
      textLine = word;
      spaceIndexes = [{ index: textLine.length, spacesNumber: 0 }];

      if (i1 === words.length - 1) {
        lines.push(textLine + SPACE.repeat(spaceCount));
      }
    }
  }

  return lines;
}
