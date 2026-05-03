const fs = require('fs');
const path = require('path');

const imagesDir = 'public/images';

const mapping = {
    'كلية الصيدلة 1.png': 'spu-pharmacy-logo.png',
    'كلية العلوم الادارية1 (1).png': 'spu-business-logo.png',
    'كلية طب الاسنان1 (2).png': 'spu-dentistry-logo.png',
    'كلية هندسة البترول1 (1).png': 'spu-petroleum-logo.png',
    'كلية هندسة الذكاء الاصطناعي1 (1).png': 'spu-ai-logo.png',
    'كلية_هندسة_تكنولوجيا_البناء_والتشييد1_1.png': 'spu-construction-logo.png'
};

Object.entries(mapping).forEach(([oldName, newName]) => {
    const oldPath = path.join(imagesDir, oldName);
    const newPath = path.join(imagesDir, newName);
    if (fs.existsSync(oldPath)) {
        console.log(`Renaming ${oldName} to ${newName}`);
        fs.renameSync(oldPath, newPath);
    } else {
        console.warn(`File not found: ${oldName}`);
    }
});
