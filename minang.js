#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

let promptSync;
try {
    promptSync = require('prompt-sync')();
} catch (e) {
    promptSync = () => { 
        console.log("Install prompt-sync (npm install prompt-sync) untuak manggunoan tanyokan()"); 
        return null; 
    };
}

const args = process.argv.slice(2);
if (args.length === 0) {
    console.log("Gunoan: minang <namofile.minang atau .ms>");
    process.exit(1);
}

const filename = path.resolve(args[0]);
if (!filename.endsWith('.minang') && !filename.endsWith('.ms')) {
    console.log("Error: File harus baakhiran .minang atau .ms");
    process.exit(1);
}

let code = fs.readFileSync(filename, 'utf8');

const dictionary = {
    'buek': 'let',
    'pasti': 'const',
    'karajo': 'function',
    'pulangkan': 'return',
    'jiko': 'if',
    'lainnyo': 'else',
    'untuak': 'for',
    'salamo': 'while',
    'baranti': 'break',
    'lanjuik': 'continue',
    'bana': 'true',
    'salah': 'false',
    'kosong': 'null',
    'indak_jaleh': 'undefined',
    'kicekkan': 'console.log',
    'cubo': 'try',
    'tangkok': 'catch',
    'akhirnyo': 'finally',
    'kelas': 'class',
    'bantuak': 'typeof',
    'iko': 'this',
    'baru': 'new'
};

for (const [minang, js] of Object.entries(dictionary)) {
    const regex = new RegExp(`\\b${minang}\\b`, 'g');
    code = code.replace(regex, js);
}

code = code.replace(/\btanyokan\b/g, 'global.__minangPrompt');
global.__minangPrompt = promptSync;

try {
    eval(code);
} catch (e) {
    console.error("Ado nan salah di kode sanak:\n", e);
}

