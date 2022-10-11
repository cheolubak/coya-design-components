export default parseColor;
/**
 * @author Cheolu.B
 * @description
 * @param {'grey' | 'red' | 'pink' | 'grape' | 'violet' | 'indigo' | 'blue' | 'cyan' | 'teal' | 'green' | 'lime' | 'yellow' | 'orange'} color
 * @param {50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900} intensity
 */
declare function parseColor(color: 'grey' | 'red' | 'pink' | 'grape' | 'violet' | 'indigo' | 'blue' | 'cyan' | 'teal' | 'green' | 'lime' | 'yellow' | 'orange', intensity: 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900): string;
