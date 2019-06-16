/**
 * Generic Mask Stack data structure
 *
 * @memberof PIXI.utils
 * @function createIndicesForQuads
 * @param {number} size - Number of quads
 * @param {boolean} use32bit - use 32-bit indices
 * @return {Uint16Array|Uint32Array} indices, 6 times number of quads
 */
export function createIndicesForQuads(size, use32bit)
{
    // the total number of indices in our array, there are 6 points per quad.

    const totalIndices = size * 6;

    const indices = use32bit ? new Uint32Array(totalIndices) : new Uint16Array(totalIndices);

    // fill the indices with the quads to draw
    for (let i = 0, j = 0; i < totalIndices; i += 6, j += 4)
    {
        indices[i + 0] = j + 0;
        indices[i + 1] = j + 1;
        indices[i + 2] = j + 2;
        indices[i + 3] = j + 0;
        indices[i + 4] = j + 2;
        indices[i + 5] = j + 3;
    }

    return indices;
}
