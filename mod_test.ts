import { assertEquals } from "https://deno.land/std@v0.62.0/testing/asserts.ts";
import * as ws from "./mod.ts";

const goldenUnindented =
  `This is a test to see if we can remove indentation properly.
  First level
    Second level`;

Deno.test("Unindent text value", () => {
  const testIndented = `
    This is a test to see if we can remove indentation properly.
      First level
        Second level`;

  assertEquals(4, ws.minWhitespaceIndent(testIndented));
  assertEquals(goldenUnindented, ws.unindentWhitespace(testIndented));
});

Deno.test("Multiple lines with whitespace as single line", () => {
  const goldenSingleLine =
    `select a, b, c from table where a = 'Value with spaces' and b = "Another set of spaces"`;
  const testMultiline = `
    select a, b, c 
      from table
     where a = 'Value with spaces' 
       and b = "Another set of spaces"`;

  assertEquals(goldenSingleLine, ws.singleLineTrim(testMultiline));
});
