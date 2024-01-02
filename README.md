# geohash-locality
### [Live Demo](https://alvin-kz83.github.io/geohash-locality/)
## Project Overview
This JavaScript project addresses the geohash locality problem, focusing on calculating the proximity of geohashes in an 8x8 grid. It's designed to enhance spatial data analysis and map services by accurately determining the nearness of different geohashes.

## Key Features
- **Geohash Grid Testing**: Utilizes `quad_t` and `quad_int` grids for geohash coding.
- **Bit Manipulation**: Functions to separate and handle odd and even bits from geohashes.
- **Proximity Measurements**: Calculates horizontal and vertical distances, and Euclidean distance between geohashes.
- **Locality Determination**: Identifies all geohashes within a specific radius.

## Functionality
1. **Bit Extraction**: `get_odd_bits(bit)` and `get_even_bits(bit)` to extract bits.
2. **Distance Calculation**: `get_col_offset(bit, bit_c)`, `get_row_offset(bit, bit_c)`, and `euclidean_dist(h_off, v_off)`.
3. **Nearness Estimation**: `get_nearness(a, b)` for estimating proximity.
4. **Radius-Based Locality**: `get_locality(bit, radii)` to find geohashes within a radius.

## Problem Statement
The solution tackles the challenge of distance-based queries on geohashes by considering the offsets of row and column bits, effectively estimating the proximity of geohashes.

