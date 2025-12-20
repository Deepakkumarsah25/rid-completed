const questions = [
    {
        "num": 1,
        "question_en": "What does 'as const' assertion do?",
        "question_hi": "'as const' assertion क्या करता है?",
        "options_en": ["Makes values read-only literals", "Converts to constant", "Creates constant variable", "Freezes object"],
        "options_hi": ["मानों को read-only literal बनाता है", "constant में convert करता है", "constant variable बनाता है", "object को freeze करता है"],
        "answer_en": "Makes values read-only literals",
        "answer_hi": "मानों को read-only literal बनाता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "What is 'satisfies' operator used for?",
        "question_hi": "'satisfies' ऑपरेटर का उपयोग किसके लिए किया जाता है?",
        "options_en": ["Checks type without widening", "Validates type", "Asserts type", "Converts type"],
        "options_hi": ["type को widen किए बिना check करता है", "type validate करता है", "type assert करता है", "type convert करता है"],
        "answer_en": "Checks type without widening",
        "answer_hi": "type को widen किए बिना check करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "What is 'unique symbol' type?",
        "question_hi": "'unique symbol' टाइप क्या है?",
        "options_en": ["Symbol that is always unique", "Unique identifier", "Both A and B", "Special symbol"],
        "options_hi": ["symbol जो हमेशा unique होता है", "unique identifier", "A और B दोनों", "special symbol"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "What is 'never' type used for?",
        "question_hi": "'never' टाइप का उपयोग किसके लिए किया जाता है?",
        "options_en": ["Values that never occur", "Empty type", "Bottom type", "All of the above"],
        "options_hi": ["मान जो कभी नहीं होते", "खाली टाइप", "bottom टाइप", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "What is 'unknown' type?",
        "question_hi": "'unknown' टाइप क्या है?",
        "options_en": ["Type-safe counterpart of any", "Unknown value", "Uncertain type", "Generic unknown"],
        "options_hi": ["any का type-safe counterpart", "unknown मान", "uncertain टाइप", "generic unknown"],
        "answer_en": "Type-safe counterpart of any",
        "answer_hi": "any का type-safe counterpart",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "How to check 'unknown' type?",
        "question_hi": "'unknown' टाइप कैसे check करें?",
        "options_en": ["Type guards", "typeof checks", "instanceof checks", "All of the above"],
        "options_hi": ["type guards", "typeof checks", "instanceof checks", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "What are template literal types?",
        "question_hi": "template literal types क्या हैं?",
        "options_en": ["String types with patterns", "Template strings as types", "Both A and B", "String templates"],
        "options_hi": ["patterns के साथ string types", "types के रूप में template strings", "A और B दोनों", "string templates"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "What is 'infer' keyword used for?",
        "question_hi": "'infer' keyword का उपयोग किसके लिए किया जाता है?",
        "options_en": ["Infer types in conditional types", "Deduce types", "Extract types", "All of the above"],
        "options_hi": ["conditional types में types infer करना", "types deduce करना", "types extract करना", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "What are recursive types?",
        "question_hi": "recursive types क्या हैं?",
        "options_en": ["Types that reference themselves", "Self-referential types", "Both A and B", "Looping types"],
        "options_hi": ["types जो स्वयं को reference करते हैं", "self-referential types", "A और B दोनों", "looping types"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "What is 'key remapping' in mapped types?",
        "question_hi": "mapped types में 'key remapping' क्या है?",
        "options_en": ["Change property names", "Rename keys", "Transform keys", "All of the above"],
        "options_hi": ["property names change करना", "keys rename करना", "keys transform करना", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "What is 'as' clause in mapped types?",
        "question_hi": "mapped types में 'as' clause क्या है?",
        "options_en": ["Remaps keys using template literals", "Changes key names", "Both A and B", "Alias for keys"],
        "options_hi": ["template literals का उपयोग करके keys remap करता है", "key names change करता है", "A और B दोनों", "keys के लिए alias"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "What is 'override' keyword?",
        "question_hi": "'override' keyword क्या है?",
        "options_en": ["Marks method overriding parent", "Explicit override", "Compiler checks override", "All of the above"],
        "options_hi": ["parent को override करने वाली method को mark करता है", "explicit override", "compiler override check करता है", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "What is 'noPropertyAccessFromIndexSignature'?",
        "question_hi": "'noPropertyAccessFromIndexSignature' क्या है?",
        "options_en": ["Requires index access for index signatures", "Disables dot notation for index signatures", "Both A and B", "Allows property access"],
        "options_hi": ["index signatures के लिए index access require करता है", "index signatures के लिए dot notation disable करता है", "A और B दोनों", "property access allow करता है"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "What is 'exactOptionalPropertyTypes'?",
        "question_hi": "'exactOptionalPropertyTypes' क्या है?",
        "options_en": ["Optional properties cannot be undefined", "Strict optional properties", "Both A and B", "Loose optional properties"],
        "options_hi": ["optional properties undefined नहीं हो सकतीं", "strict optional properties", "A और B दोनों", "loose optional properties"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "What is 'allowUnusedLabels'?",
        "question_hi": "'allowUnusedLabels' क्या है?",
        "options_en": ["Allows unused labels", "Disables unused label checking", "Both A and B", "Checks unused labels"],
        "options_hi": ["unused labels allow करता है", "unused label checking disable करता है", "A और B दोनों", "unused labels check करता है"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "What is 'allowUnreachableCode'?",
        "question_hi": "'allowUnreachableCode' क्या है?",
        "options_en": ["Allows unreachable code", "Disables unreachable code checking", "Both A and B", "Detects unreachable code"],
        "options_hi": ["unreachable code allow करता है", "unreachable code checking disable करता है", "A और B दोनों", "unreachable code detect करता है"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "What is 'useDefineForClassFields'?",
        "question_hi": "'useDefineForClassFields' क्या है?",
        "options_en": ["Uses define for class fields", "Modern class fields", "ECMAScript standard", "All of the above"],
        "options_hi": ["class fields के लिए define का उपयोग करता है", "modern class fields", "ECMAScript standard", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "What is 'forceConsistentCasingInFileNames'?",
        "question_hi": "'forceConsistentCasingInFileNames' क्या है?",
        "options_en": ["Enforces consistent file name casing", "Case-sensitive imports", "Both A and B", "Case-insensitive imports"],
        "options_hi": ["consistent file name casing enforce करता है", "case-sensitive imports", "A और B दोनों", "case-insensitive imports"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "What is 'isolatedModules'?",
        "question_hi": "'isolatedModules' क्या है?",
        "options_en": ["Each file must be standalone module", "No cross-file dependencies", "Both A and B", "Bundled modules"],
        "options_hi": ["प्रत्येक फाइल standalone module होनी चाहिए", "cross-file dependencies नहीं", "A और B दोनों", "bundled modules"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "What is 'allowSyntheticDefaultImports'?",
        "question_hi": "'allowSyntheticDefaultImports' क्या है?",
        "options_en": ["Allows default imports from modules without default export", "Synthetic default imports", "Both A and B", "Real default imports only"],
        "options_hi": ["default export के बिना modules से default imports allow करता है", "synthetic default imports", "A और B दोनों", "केवल real default imports"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "What is 'esModuleInterop'?",
        "question_hi": "'esModuleInterop' क्या है?",
        "options_en": ["Interoperability between ES modules and CommonJS", "Module system compatibility", "Both A and B", "ES modules only"],
        "options_hi": ["ES modules और CommonJS के बीच interoperability", "module system compatibility", "A और B दोनों", "केवल ES modules"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "What is 'skipLibCheck'?",
        "question_hi": "'skipLibCheck' क्या है?",
        "options_en": ["Skips type checking of declaration files", "Faster compilation", "Both A and B", "Checks all libraries"],
        "options_hi": ["declaration files की type checking skip करता है", "तेज compilation", "A और B दोनों", "सभी libraries check करता है"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "What is 'resolveJsonModule'?",
        "question_hi": "'resolveJsonModule' क्या है?",
        "options_en": ["Allows importing JSON files", "JSON as modules", "Both A and B", "JSON parsing"],
        "options_hi": ["JSON files import करने की allow करता है", "modules के रूप में JSON", "A और B दोनों", "JSON parsing"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "What is 'preserveConstEnums'?",
        "question_hi": "'preserveConstEnums' क्या है?",
        "options_en": ["Preserves const enum declarations", "Keeps const enums in output", "Both A and B", "Removes const enums"],
        "options_hi": ["const enum declarations preserve करता है", "output में const enums रखता है", "A और B दोनों", "const enums remove करता है"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "What is 'declarationMap'?",
        "question_hi": "'declarationMap' क्या है?",
        "options_en": ["Generates sourcemaps for .d.ts files", "Maps declaration files to source", "Both A and B", "Creates declaration maps"],
        "options_hi": [".d.ts files के लिए sourcemaps generate करता है", "declaration files को source से map करता है", "A और B दोनों", "declaration maps create करता है"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "What is 'incremental' compilation?",
        "question_hi": "'incremental' compilation क्या है?",
        "options_en": ["Only recompiles changed files", "Faster rebuilds", "Both A and B", "Full recompilation"],
        "options_hi": ["केवल changed files recompile करता है", "तेज rebuilds", "A और B दोनों", "पूरी recompilation"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "What is 'composite' project?",
        "question_hi": "'composite' project क्या है?",
        "options_en": ["Project that can be referenced by others", "Part of project references", "Both A and B", "Standalone project"],
        "options_hi": ["project जिसे दूसरे reference कर सकते हैं", "project references का हिस्सा", "A और B दोनों", "standalone project"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "What are project references?",
        "question_hi": "project references क्या हैं?",
        "options_en": ["Reference other TypeScript projects", "Build dependencies", "Both A and B", "Import projects"],
        "options_hi": ["दूसरे TypeScript projects को reference करना", "build dependencies", "A और B दोनों", "projects import करना"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "What is 'build' mode?",
        "question_hi": "'build' mode क्या है?",
        "options_en": ["Builds project and dependencies", "tsc --build", "Both A and B", "Compile only"],
        "options_hi": ["project और dependencies build करता है", "tsc --build", "A और B दोनों", "केवल compile"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "What is 'watch' mode?",
        "question_hi": "'watch' mode क्या है?",
        "options_en": ["Watches files and recompiles on changes", "tsc --watch", "Both A and B", "One-time compilation"],
        "options_hi": ["files watch करता है और changes पर recompile करता है", "tsc --watch", "A और B दोनों", "one-time compilation"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "What is 'noEmit' option?",
        "question_hi": "'noEmit' option क्या है?",
        "options_en": ["Type check without emitting files", "No output files", "Both A and B", "Generate output"],
        "options_hi": ["files emit किए बिना type check करता है", "कोई output files नहीं", "A और B दोनों", "output generate करना"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "What is 'removeComments' option?",
        "question_hi": "'removeComments' option क्या है?",
        "options_en": ["Removes comments from output", "Strips comments", "Both A and B", "Keeps comments"],
        "options_hi": ["output से comments remove करता है", "comments strip करता है", "A और B दोनों", "comments रखता है"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "What is 'downlevelIteration'?",
        "question_hi": "'downlevelIteration' क्या है?",
        "options_en": ["Downcompiles iteration for older targets", "ES3/ES5 iteration support", "Both A and B", "Modern iteration only"],
        "options_hi": ["older targets के लिए iteration downcompile करता है", "ES3/ES5 iteration support", "A और B दोनों", "केवल modern iteration"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "What is 'importHelpers'?",
        "question_hi": "'importHelpers' क्या है?",
        "options_en": ["Imports tslib helpers", "Reduces code size", "Both A and B", "Includes helpers inline"],
        "options_hi": ["tslib helpers import करता है", "code size reduce करता है", "A और B दोनों", "helpers inline include करता है"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "What is 'noEmitHelpers'?",
        "question_hi": "'noEmitHelpers' क्या है?",
        "options_en": ["Don't emit helpers", "No tslib dependency", "Both A and B", "Emit all helpers"],
        "options_hi": ["helpers emit नहीं करता", "कोई tslib dependency नहीं", "A और B दोनों", "सभी helpers emit करता है"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "What is 'importsNotUsedAsValues'?",
        "question_hi": "'importsNotUsedAsValues' क्या है?",
        "options_en": ["How to handle imports only used for types", "Remove type-only imports", "Preserve imports", "All of the above"],
        "options_hi": ["types के लिए use किए गए imports को कैसे handle करें", "type-only imports remove करना", "imports preserve करना", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "What is 'preserveValueImports'?",
        "question_hi": "'preserveValueImports' क्या है?",
        "options_en": ["Preserves value imports", "Keeps unused imports", "Both A and B", "Removes unused imports"],
        "options_hi": ["value imports preserve करता है", "unused imports रखता है", "A और B दोनों", "unused imports remove करता है"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "What are 'lib' compiler options?",
        "question_hi": "'lib' compiler options क्या हैं?",
        "options_en": ["Library files to include", "Type definitions", "Both A and B", "External libraries"],
        "options_hi": ["include करने के लिए library files", "type definitions", "A और B दोनों", "external libraries"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "What is 'types' compiler option?",
        "question_hi": "'types' compiler option क्या है?",
        "options_en": ["Type packages to include", "@types packages", "Both A and B", "All types"],
        "options_hi": ["include करने के लिए type packages", "@types packages", "A और B दोनों", "सभी types"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "What is 'typeRoots'?",
        "question_hi": "'typeRoots' क्या है?",
        "options_en": ["Directories for type definitions", "Paths to @types", "Both A and B", "Node_modules only"],
        "options_hi": ["type definitions के लिए directories", "@types के paths", "A और B दोनों", "केवल node_modules"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "What is 'moduleDetection'?",
        "question_hi": "'moduleDetection' क्या है?",
        "options_en": ["How to detect modules", "Auto vs legacy", "Both A and B", "Manual detection"],
        "options_hi": ["modules कैसे detect करें", "auto vs legacy", "A और B दोनों", "manual detection"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "What is 'verbatimModuleSyntax'?",
        "question_hi": "'verbatimModuleSyntax' क्या है?",
        "options_en": ["Preserves import/export syntax exactly", "No automatic transformations", "Both A and B", "Transforms syntax"],
        "options_hi": ["import/export syntax को exactly preserve करता है", "कोई automatic transformations नहीं", "A और B दोनों", "syntax transform करता है"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "What are const type parameters?",
        "question_hi": "const type parameters क्या हैं?",
        "options_en": ["Infer more precise literal types", "Const generics", "Both A and B", "Constant parameters"],
        "options_hi": ["अधिक precise literal types infer करना", "const generics", "A और B दोनों", "constant parameters"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "What is 'using' declarations?",
        "question_hi": "'using' declarations क्या हैं?",
        "options_en": ["Resource management", "Automatic disposal", "Both A and B", "Manual resource handling"],
        "options_hi": ["resource management", "automatic disposal", "A और B दोनों", "manual resource handling"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "What is 'decoratorMetadata'?",
        "question_hi": "'decoratorMetadata' क्या है?",
        "options_en": ["Decorator metadata proposal", "Reflect.metadata", "Both A and B", "Decorator info"],
        "options_hi": ["decorator metadata proposal", "Reflect.metadata", "A और B दोनों", "decorator info"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "What are 'moduleSuffixes'?",
        "question_hi": "'moduleSuffixes' क्या हैं?",
        "options_en": ["Custom module file extensions", "Additional suffixes to try", "Both A and B", "Only .ts/.js"],
        "options_hi": ["custom module file extensions", "try करने के लिए additional suffixes", "A और B दोनों", "केवल .ts/.js"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "What is 'allowImportingTsExtensions'?",
        "question_hi": "'allowImportingTsExtensions' क्या है?",
        "options_en": ["Allows importing .ts/.tsx files", "TypeScript extension imports", "Both A and B", "Only .js imports"],
        "options_hi": [".ts/.tsx files import करने की allow करता है", "TypeScript extension imports", "A और B दोनों", "केवल .js imports"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "What is 'rewriteRelativeImportExtensions'?",
        "question_hi": "'rewriteRelativeImportExtensions' क्या है?",
        "options_en": ["Rewrites relative import extensions", "Adds .js to imports", "Both A and B", "Keeps original extensions"],
        "options_hi": ["relative import extensions rewrite करता है", "imports में .js add करता है", "A और B दोनों", "original extensions रखता है"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "What is 'moduleResolution bundler'?",
        "question_hi": "'moduleResolution bundler' क्या है?",
        "options_en": ["Bundler-like module resolution", "For webpack/vite/etc", "Both A and B", "Node.js resolution"],
        "options_hi": ["bundler-like module resolution", "webpack/vite/etc के लिए", "A और B दोनों", "Node.js resolution"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "What is 'customConditions'?",
        "question_hi": "'customConditions' क्या है?",
        "options_en": ["Custom package.json export conditions", "Additional resolution conditions", "Both A and B", "Standard conditions only"],
        "options_hi": ["custom package.json export conditions", "additional resolution conditions", "A और B दोनों", "केवल standard conditions"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "What are 'module' and 'moduleResolution' relationship?",
        "question_hi": "'module' और 'moduleResolution' relationship क्या है?",
        "options_en": ["Module format vs resolution strategy", "Interdependent options", "Both A and B", "Independent options"],
        "options_hi": ["module format vs resolution strategy", "interdependent options", "A और B दोनों", "independent options"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "What is 'allowArbitraryExtensions'?",
        "question_hi": "'allowArbitraryExtensions' क्या है?",
        "options_en": ["Allows imports with arbitrary extensions", "Non-standard extensions", "Both A and B", "Only standard extensions"],
        "options_hi": ["arbitrary extensions के साथ imports allow करता है", "non-standard extensions", "A और B दोनों", "केवल standard extensions"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "What is 'resolvePackageJsonExports'?",
        "question_hi": "'resolvePackageJsonExports' क्या है?",
        "options_en": ["Resolves package.json exports field", "Modern package resolution", "Both A and B", "Legacy resolution"],
        "options_hi": ["package.json exports field resolve करता है", "modern package resolution", "A और B दोनों", "legacy resolution"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "What is 'resolvePackageJsonImports'?",
        "question_hi": "'resolvePackageJsonImports' क्या है?",
        "options_en": ["Resolves package.json imports field", "Subpath imports", "Both A and B", "Main entry only"],
        "options_hi": ["package.json imports field resolve करता है", "subpath imports", "A और B दोनों", "केवल main entry"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "What is 'allowUmdGlobalAccess'?",
        "question_hi": "'allowUmdGlobalAccess' क्या है?",
        "options_en": ["Allows accessing UMD globals", "UMD module global access", "Both A and B", "No UMD access"],
        "options_hi": ["UMD globals access करने की allow करता है", "UMD module global access", "A और B दोनों", "कोई UMD access नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "What is 'baseUrl'?",
        "question_hi": "'baseUrl' क्या है?",
        "options_en": ["Base directory for non-relative imports", "Module resolution base", "Both A and B", "Relative imports only"],
        "options_hi": ["non-relative imports के लिए base directory", "module resolution base", "A और B दोनों", "केवल relative imports"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "What are 'paths' mappings?",
        "question_hi": "'paths' mappings क्या हैं?",
        "options_en": ["Custom module path mappings", "Alias imports", "Both A and B", "Direct imports only"],
        "options_hi": ["custom module path mappings", "alias imports", "A और B दोनों", "केवल direct imports"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "What is 'rootDirs'?",
        "question_hi": "'rootDirs' क्या है?",
        "options_en": ["Virtual directory combining multiple roots", "Multiple source roots", "Both A and B", "Single root only"],
        "options_hi": ["multiple roots को combine करने वाला virtual directory", "multiple source roots", "A और B दोनों", "केवल single root"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "What is 'typeAcquisition'?",
        "question_hi": "'typeAcquisition' क्या है?",
        "options_en": ["Automatic type acquisition", "@types auto-install", "Both A and B", "Manual type installation"],
        "options_hi": ["automatic type acquisition", "@types auto-install", "A और B दोनों", "manual type installation"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "What are 'plugins' in tsconfig?",
        "question_hi": "tsconfig में 'plugins' क्या हैं?",
        "options_en": ["Language service plugins", "IDE enhancements", "Both A and B", "Compiler plugins"],
        "options_hi": ["language service plugins", "IDE enhancements", "A और B दोनों", "compiler plugins"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "What is 'emitDeclarationOnly'?",
        "question_hi": "'emitDeclarationOnly' क्या है?",
        "options_en": ["Only emit .d.ts files", "No .js output", "Both A and B", "Emit all files"],
        "options_hi": ["केवल .d.ts files emit करता है", "कोई .js output नहीं", "A और B दोनों", "सभी files emit करता है"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "What is 'declarationDir'?",
        "question_hi": "'declarationDir' क्या है?",
        "options_en": ["Output directory for .d.ts files", "Declaration file directory", "Both A and B", "Same as outDir"],
        "options_hi": [".d.ts files के लिए output directory", "declaration file directory", "A और B दोनों", "outDir के समान"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "What is 'stripInternal'?",
        "question_hi": "'stripInternal' क्या है?",
        "options_en": ["Removes @internal comments from output", "Internal API removal", "Both A and B", "Keeps internal APIs"],
        "options_hi": ["output से @internal comments remove करता है", "internal API removal", "A और B दोनों", "internal APIs रखता है"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "What is 'noEmitOnError'?",
        "question_hi": "'noEmitOnError' क्या है?",
        "options_en": ["Don't emit if type errors exist", "Stop on errors", "Both A and B", "Emit despite errors"],
        "options_hi": ["type errors exist होने पर emit नहीं करता", "errors पर stop करता है", "A और B दोनों", "errors के बावजूद emit करता है"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "What is 'newLine' option?",
        "question_hi": "'newLine' option क्या है?",
        "options_en": ["Line endings for output", "CRLF vs LF", "Both A and B", "Platform default"],
        "options_hi": ["output के लिए line endings", "CRLF vs LF", "A और B दोनों", "platform default"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "What is 'noErrorTruncation'?",
        "question_hi": "'noErrorTruncation' क्या है?",
        "options_en": ["Don't truncate error messages", "Full error details", "Both A and B", "Truncated errors"],
        "options_hi": ["error messages truncate नहीं करता", "full error details", "A और B दोनों", "truncated errors"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "What is 'preserveWatchOutput'?",
        "question_hi": "'preserveWatchOutput' क्या है?",
        "options_en": ["Preserves watch mode output", "No screen clearing", "Both A and B", "Clear screen each time"],
        "options_hi": ["watch mode output preserve करता है", "कोई screen clearing नहीं", "A और B दोनों", "हर बार screen clear करता है"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "What is 'listFiles'?",
        "question_hi": "'listFiles' क्या है?",
        "options_en": ["Lists files to be compiled", "Shows compilation files", "Both A and B", "Silent compilation"],
        "options_hi": ["compile होने वाली files list करता है", "compilation files show करता है", "A और B दोनों", "silent compilation"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "What is 'listEmittedFiles'?",
        "question_hi": "'listEmittedFiles' क्या है?",
        "options_en": ["Lists emitted output files", "Shows generated files", "Both A and B", "Hides output files"],
        "options_hi": ["emitted output files list करता है", "generated files show करता है", "A और B दोनों", "output files hide करता है"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "What is 'diagnostics'?",
        "question_hi": "'diagnostics' क्या है?",
        "options_en": ["Shows diagnostic information", "Compiler performance info", "Both A and B", "No diagnostics"],
        "options_hi": ["diagnostic information show करता है", "compiler performance info", "A और B दोनों", "कोई diagnostics नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "What is 'extendedDiagnostics'?",
        "question_hi": "'extendedDiagnostics' क्या है?",
        "options_en": ["Extended diagnostic information", "Detailed compiler info", "Both A and B", "Basic diagnostics only"],
        "options_hi": ["extended diagnostic information", "detailed compiler info", "A और B दोनों", "केवल basic diagnostics"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "What is 'generateCpuProfile'?",
        "question_hi": "'generateCpuProfile' क्या है?",
        "options_en": ["Generates CPU profile", "Performance profiling", "Both A and B", "No profiling"],
        "options_hi": ["CPU profile generate करता है", "performance profiling", "A और B दोनों", "कोई profiling नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "What is 'plugins' vs 'compilerPlugins'?",
        "question_hi": "'plugins' vs 'compilerPlugins' क्या है?",
        "options_en": ["Language service vs compiler plugins", "Different plugin types", "Both A and B", "Same thing"],
        "options_hi": ["language service vs compiler plugins", "different plugin types", "A और B दोनों", "same thing"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "What is 'tsBuildInfoFile'?",
        "question_hi": "'tsBuildInfoFile' क्या है?",
        "options_en": ["File for incremental build info", "Build state storage", "Both A and B", "No build info"],
        "options_hi": ["incremental build info के लिए file", "build state storage", "A और B दोनों", "कोई build info नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "What is 'disableReferencedProjectLoad'?",
        "question_hi": "'disableReferencedProjectLoad' क्या है?",
        "options_en": ["Don't load referenced projects", "Faster IDE startup", "Both A and B", "Load all references"],
        "options_hi": ["referenced projects load नहीं करता", "तेज IDE startup", "A और B दोनों", "सभी references load करता है"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "What is 'disableSolutionSearching'?",
        "question_hi": "'disableSolutionSearching' क्या है?",
        "options_en": ["Don't search for solution files", "No .sln file search", "Both A and B", "Search for solutions"],
        "options_hi": ["solution files के लिए search नहीं करता", "कोई .sln file search नहीं", "A और B दोनों", "solutions के लिए search करता है"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "What is 'disableSourceOfProjectReferenceRedirect'?",
        "question_hi": "'disableSourceOfProjectReferenceRedirect' क्या है?",
        "options_en": ["Don't use source of referenced projects", "Use output .d.ts files", "Both A and B", "Use source files"],
        "options_hi": ["referenced projects के source का उपयोग नहीं करता", "output .d.ts files use करता है", "A और B दोनों", "source files use करता है"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "What is 'traceResolution'?",
        "question_hi": "'traceResolution' क्या है?",
        "options_en": ["Traces module resolution", "Debug module resolution", "Both A and B", "Silent resolution"],
        "options_hi": ["module resolution trace करता है", "debug module resolution", "A और B दोनों", "silent resolution"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "What is 'listFilesOnly'?",
        "question_hi": "'listFilesOnly' क्या है?",
        "options_en": ["Only list files, don't compile", "Dry run compilation", "Both A and B", "Compile normally"],
        "options_hi": ["केवल files list करता है, compile नहीं करता", "dry run compilation", "A और B दोनों", "सामान्य रूप से compile करता है"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "What is 'pretty' output?",
        "question_hi": "'pretty' output क्या है?",
        "options_en": ["Colorful formatted output", "Readable compiler output", "Both A and B", "Plain text output"],
        "options_hi": ["colorful formatted output", "readable compiler output", "A और B दोनों", "plain text output"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "What are 'config file inheritance'?",
        "question_hi": "'config file inheritance' क्या है?",
        "options_en": ["Extending other tsconfig files", "Base configuration", "Both A and B", "Standalone config"],
        "options_hi": ["दूसरे tsconfig files extend करना", "base configuration", "A और B दोनों", "standalone config"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "What is 'references' in tsconfig?",
        "question_hi": "tsconfig में 'references' क्या है?",
        "options_en": ["Project references", "Build dependencies", "Both A and B", "Import references"],
        "options_hi": ["project references", "build dependencies", "A और B दोनों", "import references"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "What is 'extends' in tsconfig?",
        "question_hi": "tsconfig में 'extends' क्या है?",
        "options_en": ["Extends another tsconfig", "Configuration inheritance", "Both A and B", "Independent config"],
        "options_hi": ["दूसरे tsconfig को extends करता है", "configuration inheritance", "A और B दोनों", "independent config"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "What is 'compileOnSave'?",
        "question_hi": "'compileOnSave' क्या है?",
        "options_en": ["Compile when file saved", "IDE/editor feature", "Both A and B", "Manual compilation only"],
        "options_hi": ["file saved होने पर compile करता है", "IDE/editor feature", "A और B दोनों", "केवल manual compilation"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "What is 'tsc --init'?",
        "question_hi": "'tsc --init' क्या है?",
        "options_en": ["Creates tsconfig.json", "Initialize TypeScript project", "Both A and B", "Compiles project"],
        "options_hi": ["tsconfig.json create करता है", "TypeScript project initialize करता है", "A और B दोनों", "project compile करता है"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "What is 'tsc --showConfig'?",
        "question_hi": "'tsc --showConfig' क्या है?",
        "options_en": ["Shows resolved configuration", "Effective config display", "Both A and B", "Raw config file"],
        "options_hi": ["resolved configuration show करता है", "effective config display", "A और B दोनों", "raw config file"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "What is 'tsc --project'?",
        "question_hi": "'tsc --project' क्या है?",
        "options_en": ["Specifies project file", "Custom tsconfig path", "Both A and B", "Current directory only"],
        "options_hi": ["project file specify करता है", "custom tsconfig path", "A और B दोनों", "केवल current directory"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "What is 'tsc --dry'?",
        "question_hi": "'tsc --dry' क्या है?",
        "options_en": ["Dry run compilation", "Check without emitting", "Both A and B", "Actual compilation"],
        "options_hi": ["dry run compilation", "emit किए बिना check करता है", "A और B दोनों", "actual compilation"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "What is 'tsc --clean'?",
        "question_hi": "'tsc --clean' क्या है?",
        "options_en": ["Deletes output files", "Clean build", "Both A and B", "Keep output files"],
        "options_hi": ["output files delete करता है", "clean build", "A और B दोनों", "output files रखता है"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "What is 'tsc --force'?",
        "question_hi": "'tsc --force' क्या है?",
        "options_en": ["Force recompilation", "Ignore incremental", "Both A and B", "Use incremental build"],
        "options_hi": ["force recompilation", "incremental ignore करता है", "A और B दोनों", "incremental build use करता है"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "What is 'tsc --extendedDiagnostics'?",
        "question_hi": "'tsc --extendedDiagnostics' क्या है?",
        "options_en": ["Extended compiler diagnostics", "Detailed performance info", "Both A and B", "Basic diagnostics"],
        "options_hi": ["extended compiler diagnostics", "detailed performance info", "A और B दोनों", "basic diagnostics"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "What is 'tsc --generateTrace'?",
        "question_hi": "'tsc --generateTrace' क्या है?",
        "options_en": ["Generates trace file", "Compiler trace output", "Both A and B", "No trace generation"],
        "options_hi": ["trace file generate करता है", "compiler trace output", "A और B दोनों", "कोई trace generation नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "What is 'tsc --explainFiles'?",
        "question_hi": "'tsc --explainFiles' क्या है?",
        "options_en": ["Explains why files included", "File inclusion reasons", "Both A and B", "Just list files"],
        "options_hi": ["files included होने का कारण explain करता है", "file inclusion reasons", "A और B दोनों", "केवल files list करता है"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "What is 'tsc --incremental false'?",
        "question_hi": "'tsc --incremental false' क्या है?",
        "options_en": ["Disables incremental compilation", "Full recompilation", "Both A and B", "Enables incremental"],
        "options_hi": ["incremental compilation disable करता है", "full recompilation", "A और B दोनों", "incremental enable करता है"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "What is 'tsc --composite false'?",
        "question_hi": "'tsc --composite false' क्या है?",
        "options_en": ["Disables composite project", "Standalone project", "Both A and B", "Enables composite"],
        "options_hi": ["composite project disable करता है", "standalone project", "A और B दोनों", "composite enable करता है"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "What is 'tsc --tsBuildInfoFile'?",
        "question_hi": "'tsc --tsBuildInfoFile' क्या है?",
        "options_en": ["Specifies build info file", "Custom .tsbuildinfo path", "Both A and B", "Default location only"],
        "options_hi": ["build info file specify करता है", "custom .tsbuildinfo path", "A और B दोनों", "केवल default location"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "What is 'tsc --listFilesOnly'?",
        "question_hi": "'tsc --listFilesOnly' क्या है?",
        "options_en": ["Only lists files", "No compilation", "Both A and B", "Compiles normally"],
        "options_hi": ["केवल files list करता है", "कोई compilation नहीं", "A और B दोनों", "सामान्य रूप से compile करता है"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "What is 'tsc --preserveWatchOutput'?",
        "question_hi": "'tsc --preserveWatchOutput' क्या है?",
        "options_en": ["Preserves watch output", "No screen clearing", "Both A and B", "Clears screen"],
        "options_hi": ["watch output preserve करता है", "कोई screen clearing नहीं", "A और B दोनों", "screen clear करता है"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "What is 'tsc --assumeChangesOnlyAffectDirectDependencies'?",
        "question_hi": "'tsc --assumeChangesOnlyAffectDirectDependencies' क्या है?",
        "options_en": ["Optimistic incremental rebuild", "Faster rebuilds", "Both A and B", "Full dependency checking"],
        "options_hi": ["optimistic incremental rebuild", "तेज rebuilds", "A और B दोनों", "full dependency checking"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "What is 'tsc --generateCpuProfile'?",
        "question_hi": "'tsc --generateCpuProfile' क्या है?",
        "options_en": ["Generates CPU profile", "Performance analysis", "Both A and B", "No profiling"],
        "options_hi": ["CPU profile generate करता है", "performance analysis", "A और B दोनों", "कोई profiling नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    }
];
// --------------------------- GLOBAL VARS -----------------------------
let currentQuestion = 0;
let language = "en";
let timeLeft = 60 * 60;   // 60 minutes timer
let timerInterval;

// --------------------------- LOAD QUESTION ----------------------------
function loadQuestion(index) {
    const q = questions[index];

    document.getElementById("question").textContent =
        `${q.num}. ${language === "en" ? q.question_en : q.question_hi}`;

    document.getElementById("questionCounter").textContent =
        `Question ${index + 1} of ${questions.length}`;

    const optionsElement = document.getElementById("options");
    optionsElement.innerHTML = "";

    const options = language === "en" ? q.options_en : q.options_hi;

    options.forEach((option) => {
        const isSelected = q.selected === option;
        const optionDiv = document.createElement("div");

        optionDiv.className = "option-box";
        optionDiv.style = `
            border: 2px solid ${isSelected ? "#007bff" : "#ccc"};
            background-color: ${isSelected ? "#e7f1ff" : "white"};
            padding: 10px;
            border-radius: 8px;
            margin: 6px 0;
            cursor: pointer;
        `;

        optionDiv.innerHTML = `
            <input type="radio" name="option"
            value="${option}" ${isSelected ? "checked" : ""} /> ${option}
        `;

        optionDiv.addEventListener("click", () => {
            markAttempted(index, option);
            loadQuestion(index);
        });

        optionsElement.appendChild(optionDiv);
    });

    updateNavigation();
}

// --------------------------- MARK ATTEMPT ----------------------------
function markAttempted(index, selectedAnswer) {
    questions[index].attempted = true;
    questions[index].selected = selectedAnswer;
    updateNavigation();
}

// --------------------------- NEXT / PREV -----------------------------
function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        loadQuestion(currentQuestion);
    }
}

function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion(currentQuestion);
    }
}

// --------------------------- LANGUAGE CHANGE -------------------------
function changeLanguage() {
    language = document.getElementById("languageSelect").value;
    loadQuestion(currentQuestion);
}

// --------------------------- TIMER -------------------------------
function startTimer() {
    const timerElement = document.getElementById("timer");
    clearInterval(timerInterval);

    timerInterval = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert("⏳ Time Over!");
            submitQuiz();
            return;
        }

        const h = Math.floor(timeLeft / 3600);
        const m = Math.floor((timeLeft % 3600) / 60);
        const s = timeLeft % 60;

        timerElement.textContent =
            `Time Left: ${h.toString().padStart(2, "0")}:${m
                .toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;

        timeLeft--;
    }, 1000);
}

// --------------------------- SUBMIT QUIZ ---------------------
function submitQuiz() {
    let confirmation = confirm("Are you sure you want to submit the test?");
    if (!confirmation) return;

    clearInterval(timerInterval);

    // Calculate time spent
    const totalTimeSpent = (60 * 60) - timeLeft;
    const mins = Math.floor(totalTimeSpent / 60);
    const secs = totalTimeSpent % 60;

    // Save to localStorage
    localStorage.setItem("timeTaken", `${mins} min ${secs} sec`);

    let attempted = 0;
    let notAttempted = 0;
    let score = 0;
    const results = [];

    questions.forEach(q => {
        if (q.attempted) {
            attempted++;
            if (q.selected === q.answer_en || q.selected === q.answer_hi) {
                score++;
            }
        } else {
            notAttempted++;
        }

        results.push({
            question: language === "en" ? q.question_en : q.question_hi,
            selected: q.selected || "Not Answered",
            correct: language === "en" ? q.answer_en : q.answer_hi
        });
    });

    // Save result data
    localStorage.setItem("attempted", attempted);
    localStorage.setItem("notAttempted", notAttempted);
    localStorage.setItem("score", score);
    localStorage.setItem("results", JSON.stringify(results));

    // Stop camera stream if active
    if (videoStream) {
        videoStream.getTracks().forEach(track => track.stop());
    }

    // Redirect
    window.location.href = "/RTS/public/Deshbord/category/test/submit-test.html";
}

// --------------------------- NAVIGATION ------------------------------
function updateNavigation() {
    const nav = document.getElementById("circleContainer");
    nav.innerHTML = "";

    questions.forEach((q, i) => {
        let color = "gray";
        if (i === currentQuestion) color = "blue";
        else if (q.attempted) color = "green";

        const circle = document.createElement("div");
        circle.className = "circle";
        circle.style.background = color;
        circle.textContent = i + 1;
        circle.onclick = () => jumpToQuestion(i);
        nav.appendChild(circle);
    });
}

function jumpToQuestion(i) {
    currentQuestion = i;
    loadQuestion(i);
}

// --------------------------- CAMERA ----------------------
let videoStream;

function startCamera() {
    const container = document.createElement("div");
    container.id = "camera-container";
    container.style.position = "fixed";
    container.style.top = "10px";
    container.style.left = "10px";
    container.style.width = "130px";
    container.style.height = "130px";
    container.style.borderRadius = "50%";
    container.style.overflow = "hidden";
    container.style.background = "#000";
    container.style.border = "3px solid red";
    container.style.zIndex = "9999";
    document.body.appendChild(container);

    const video = document.createElement("video");
    video.autoplay = true;
    video.playsInline = true;
    video.style.width = "100%";
    video.style.height = "100%";
    video.style.objectFit = "cover";
    container.appendChild(video);

    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            video.srcObject = stream;
            videoStream = stream;
        })
        .catch(() => alert("Camera not accessible!"));
}

// --------------------------- PAGE LOAD --------------------------
window.onload = function () {
    loadQuestion(currentQuestion);
    startTimer();
    startCamera();
};