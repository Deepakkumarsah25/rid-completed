const questions = [
    {
        "num": 1,
        "question_en": "What is the purpose of TypeScript's strict mode?",
        "question_hi": "TypeScript के strict mode का purpose क्या है?",
        "options_en": ["Enables all strict type checking options", "Disables type checking", "Makes code run faster", "Reduces file size"],
        "options_hi": ["सभी strict type checking options enable करता है", "Type checking disable करता है", "Code को faster run करता है", "File size reduce करता है"],
        "answer_en": "Enables all strict type checking options",
        "answer_hi": "सभी strict type checking options enable करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "Which compiler option enables strict mode?",
        "question_hi": "कौन सा compiler option strict mode enable करता है?",
        "options_en": ["strict: true", "strictMode: true", "useStrict: true", "strictChecking: true"],
        "options_hi": ["strict: true", "strictMode: true", "useStrict: true", "strictChecking: true"],
        "answer_en": "strict: true",
        "answer_hi": "strict: true",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "What does 'noImplicitAny' do?",
        "question_hi": "'noImplicitAny' क्या करता है?",
        "options_en": ["Raises error on implicit 'any' type", "Allows implicit 'any' type", "Disables 'any' type", "Enables 'any' type"],
        "options_hi": ["Implicit 'any' type पर error raise करता है", "Implicit 'any' type allow करता है", "'any' type disable करता है", "'any' type enable करता है"],
        "answer_en": "Raises error on implicit 'any' type",
        "answer_hi": "Implicit 'any' type पर error raise करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "What does 'strictNullChecks' do?",
        "question_hi": "'strictNullChecks' क्या करता है?",
        "options_en": ["Enables strict null and undefined checking", "Disables null checking", "Allows null everywhere", "Ignores null errors"],
        "options_hi": ["Strict null और undefined checking enable करता है", "Null checking disable करता है", "Null को everywhere allow करता है", "Null errors ignore करता है"],
        "answer_en": "Enables strict null and undefined checking",
        "answer_hi": "Strict null और undefined checking enable करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "What does 'noImplicitReturns' do?",
        "question_hi": "'noImplicitReturns' क्या करता है?",
        "options_en": ["Checks all code paths return values", "Allows implicit returns", "Disables return checking", "Ignores return types"],
        "options_hi": ["Check करता है कि सभी code paths values return करें", "Implicit returns allow करता है", "Return checking disable करता है", "Return types ignore करता है"],
        "answer_en": "Checks all code paths return values",
        "answer_hi": "Check करता है कि सभी code paths values return करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "What does 'noUnusedParameters' do?",
        "question_hi": "'noUnusedParameters' क्या करता है?",
        "options_en": ["Flags unused function parameters", "Allows unused parameters", "Ignores parameter usage", "Deletes unused parameters"],
        "options_hi": ["Unused function parameters flag करता है", "Unused parameters allow करता है", "Parameter usage ignore करता है", "Unused parameters delete करता है"],
        "answer_en": "Flags unused function parameters",
        "answer_hi": "Unused function parameters flag करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "What does 'noUnusedLocals' do?",
        "question_hi": "'noUnusedLocals' क्या करता है?",
        "options_en": ["Flags unused local variables", "Allows unused locals", "Ignores local variables", "Deletes unused locals"],
        "options_hi": ["Unused local variables flag करता है", "Unused locals allow करता है", "Local variables ignore करता है", "Unused locals delete करता है"],
        "answer_en": "Flags unused local variables",
        "answer_hi": "Unused local variables flag करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "What does 'exactOptionalPropertyTypes' do?",
        "question_hi": "'exactOptionalPropertyTypes' क्या करता है?",
        "options_en": ["Strict checking of optional properties", "Loose checking of optional properties", "No checking of optional properties", "Random checking of optional properties"],
        "options_hi": ["Optional properties की strict checking", "Optional properties की loose checking", "Optional properties की कोई checking नहीं", "Optional properties की random checking"],
        "answer_en": "Strict checking of optional properties",
        "answer_hi": "Optional properties की strict checking",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "What does 'noImplicitOverride' do?",
        "question_hi": "'noImplicitOverride' क्या करता है?",
        "options_en": ["Requires explicit override keyword", "Allows implicit override", "Disables override", "Ignores override"],
        "options_hi": ["Explicit override keyword require करता है", "Implicit override allow करता है", "Override disable करता है", "Override ignore करता है"],
        "answer_en": "Requires explicit override keyword",
        "answer_hi": "Explicit override keyword require करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "What is the 'target' compiler option?",
        "question_hi": "'target' compiler option क्या है?",
        "options_en": ["Specifies ECMAScript target version", "Specifies output directory", "Specifies input files", "Specifies module system"],
        "options_hi": ["ECMAScript target version specify करता है", "Output directory specify करता है", "Input files specify करता है", "Module system specify करता है"],
        "answer_en": "Specifies ECMAScript target version",
        "answer_hi": "ECMAScript target version specify करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "What is the 'module' compiler option?",
        "question_hi": "'module' compiler option क्या है?",
        "options_en": ["Specifies module code generation", "Specifies target version", "Specifies output directory", "Specifies input files"],
        "options_hi": ["Module code generation specify करता है", "Target version specify करता है", "Output directory specify करता है", "Input files specify करता है"],
        "answer_en": "Specifies module code generation",
        "answer_hi": "Module code generation specify करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "What does 'outDir' specify?",
        "question_hi": "'outDir' क्या specify करता है?",
        "options_en": ["Output directory for compiled files", "Input directory for source files", "Root directory", "Module directory"],
        "options_hi": ["Compiled files के लिए output directory", "Source files के लिए input directory", "Root directory", "Module directory"],
        "answer_en": "Output directory for compiled files",
        "answer_hi": "Compiled files के लिए output directory",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "What does 'rootDir' specify?",
        "question_hi": "'rootDir' क्या specify करता है?",
        "options_en": ["Root directory of input files", "Output directory", "Module directory", "Source directory"],
        "options_hi": ["Input files की root directory", "Output directory", "Module directory", "Source directory"],
        "answer_en": "Root directory of input files",
        "answer_hi": "Input files की root directory",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "What is the purpose of 'include' in tsconfig.json?",
        "question_hi": "tsconfig.json में 'include' का purpose क्या है?",
        "options_en": ["Specifies files to include in compilation", "Specifies files to exclude", "Specifies output files", "Specifies module files"],
        "options_hi": ["Compilation में include करने के लिए files specify करता है", "Exclude करने के लिए files specify करता है", "Output files specify करता है", "Module files specify करता है"],
        "answer_en": "Specifies files to include in compilation",
        "answer_hi": "Compilation में include करने के लिए files specify करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "What is the purpose of 'exclude' in tsconfig.json?",
        "question_hi": "tsconfig.json में 'exclude' का purpose क्या है?",
        "options_en": ["Specifies files to exclude from compilation", "Specifies files to include", "Specifies output files", "Specifies module files"],
        "options_hi": ["Compilation से exclude करने के लिए files specify करता है", "Include करने के लिए files specify करता है", "Output files specify करता है", "Module files specify करता है"],
        "answer_en": "Specifies files to exclude from compilation",
        "answer_hi": "Compilation से exclude करने के लिए files specify करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "What does 'declaration' compiler option do?",
        "question_hi": "'declaration' compiler option क्या करता है?",
        "options_en": ["Generates .d.ts declaration files", "Generates .js files", "Generates .map files", "Generates .json files"],
        "options_hi": [".d.ts declaration files generate करता है", ".js files generate करता है", ".map files generate करता है", ".json files generate करता है"],
        "answer_en": "Generates .d.ts declaration files",
        "answer_hi": ".d.ts declaration files generate करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "What does 'declarationMap' do?",
        "question_hi": "'declarationMap' क्या करता है?",
        "options_en": ["Generates sourcemaps for declaration files", "Generates declaration files", "Generates JavaScript files", "Generates sourcemaps for JavaScript"],
        "options_hi": ["Declaration files के लिए sourcemaps generate करता है", "Declaration files generate करता है", "JavaScript files generate करता है", "JavaScript के लिए sourcemaps generate करता है"],
        "answer_en": "Generates sourcemaps for declaration files",
        "answer_hi": "Declaration files के लिए sourcemaps generate करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "What does 'sourceMap' do?",
        "question_hi": "'sourceMap' क्या करता है?",
        "options_en": ["Generates sourcemaps for JavaScript files", "Generates declaration files", "Generates JavaScript files", "Generates sourcemaps for declaration files"],
        "options_hi": ["JavaScript files के लिए sourcemaps generate करता है", "Declaration files generate करता है", "JavaScript files generate करता है", "Declaration files के लिए sourcemaps generate करता है"],
        "answer_en": "Generates sourcemaps for JavaScript files",
        "answer_hi": "JavaScript files के लिए sourcemaps generate करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "What is the purpose of 'lib' compiler option?",
        "question_hi": "'lib' compiler option का purpose क्या है?",
        "options_en": ["Specifies library files to include", "Specifies output library", "Specifies input library", "Specifies module library"],
        "options_hi": ["Include करने के लिए library files specify करता है", "Output library specify करता है", "Input library specify करता है", "Module library specify करता है"],
        "answer_en": "Specifies library files to include",
        "answer_hi": "Include करने के लिए library files specify करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "What does 'noEmit' do?",
        "question_hi": "'noEmit' क्या करता है?",
        "options_en": ["Prevents emitting output files", "Generates output files", "Emits only declarations", "Emits only sourcemaps"],
        "options_hi": ["Output files emit करने से prevent करता है", "Output files generate करता है", "केवल declarations emit करता है", "केवल sourcemaps emit करता है"],
        "answer_en": "Prevents emitting output files",
        "answer_hi": "Output files emit करने से prevent करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "What is the purpose of 'esModuleInterop'?",
        "question_hi": "'esModuleInterop' का purpose क्या है?",
        "options_en": ["Enables better interoperability with CommonJS", "Disables module interoperability", "Enables AMD modules", "Disables ES modules"],
        "options_hi": ["CommonJS के साथ better interoperability enable करता है", "Module interoperability disable करता है", "AMD modules enable करता है", "ES modules disable करता है"],
        "answer_en": "Enables better interoperability with CommonJS",
        "answer_hi": "CommonJS के साथ better interoperability enable करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "What does 'allowSyntheticDefaultImports' do?",
        "question_hi": "'allowSyntheticDefaultImports' क्या करता है?",
        "options_en": ["Allows default imports from modules with no default export", "Disables default imports", "Requires default exports", "Ignores default imports"],
        "options_hi": ["No default export वाले modules से default imports allow करता है", "Default imports disable करता है", "Default exports require करता है", "Default imports ignore करता है"],
        "answer_en": "Allows default imports from modules with no default export",
        "answer_hi": "No default export वाले modules से default imports allow करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "What is the 'baseUrl' compiler option?",
        "question_hi": "'baseUrl' compiler option क्या है?",
        "options_en": ["Base directory for non-relative module names", "Output directory", "Source directory", "Module directory"],
        "options_hi": ["Non-relative module names के लिए base directory", "Output directory", "Source directory", "Module directory"],
        "answer_en": "Base directory for non-relative module names",
        "answer_hi": "Non-relative module names के लिए base directory",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "What are 'paths' used for in tsconfig.json?",
        "question_hi": "tsconfig.json में 'paths' किसके लिए use होते हैं?",
        "options_en": ["Module resolution path mapping", "Output path mapping", "Source path mapping", "Import path mapping"],
        "options_hi": ["Module resolution path mapping", "Output path mapping", "Source path mapping", "Import path mapping"],
        "answer_en": "Module resolution path mapping",
        "answer_hi": "Module resolution path mapping",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "What does 'typeRoots' specify?",
        "question_hi": "'typeRoots' क्या specify करता है?",
        "options_en": ["Locations for type definitions", "Locations for source files", "Locations for output files", "Locations for module files"],
        "options_hi": ["Type definitions के locations", "Source files के locations", "Output files के locations", "Module files के locations"],
        "answer_en": "Locations for type definitions",
        "answer_hi": "Type definitions के locations",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "What are 'types' in tsconfig.json?",
        "question_hi": "tsconfig.json में 'types' क्या हैं?",
        "options_en": ["Type packages to include", "Type packages to exclude", "Source types", "Output types"],
        "options_hi": ["Include करने के लिए type packages", "Exclude करने के लिए type packages", "Source types", "Output types"],
        "answer_en": "Type packages to include",
        "answer_hi": "Include करने के लिए type packages",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "What does 'skipLibCheck' do?",
        "question_hi": "'skipLibCheck' क्या करता है?",
        "options_en": ["Skips type checking of declaration files", "Enables lib checking", "Disables all checking", "Skips source checking"],
        "options_hi": ["Declaration files की type checking skip करता है", "Lib checking enable करता है", "सभी checking disable करता है", "Source checking skip करता है"],
        "answer_en": "Skips type checking of declaration files",
        "answer_hi": "Declaration files की type checking skip करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "What is the 'moduleResolution' option?",
        "question_hi": "'moduleResolution' option क्या है?",
        "options_en": ["Specifies module resolution strategy", "Specifies module format", "Specifies module target", "Specifies module output"],
        "options_hi": ["Module resolution strategy specify करता है", "Module format specify करता है", "Module target specify करता है", "Module output specify करता है"],
        "answer_en": "Specifies module resolution strategy",
        "answer_hi": "Module resolution strategy specify करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "What are the main module resolution strategies?",
        "question_hi": "Main module resolution strategies कौन सी हैं?",
        "options_en": ["node and classic", "commonjs and amd", "es6 and umd", "system and none"],
        "options_hi": ["node और classic", "commonjs और amd", "es6 और umd", "system और none"],
        "answer_en": "node and classic",
        "answer_hi": "node और classic",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "What does 'forceConsistentCasingInFileNames' do?",
        "question_hi": "'forceConsistentCasingInFileNames' क्या करता है?",
        "options_en": ["Ensures consistent file name casing in imports", "Allows inconsistent casing", "Ignores file casing", "Changes file casing"],
        "options_hi": ["Imports में consistent file name casing ensure करता है", "Inconsistent casing allow करता है", "File casing ignore करता है", "File casing change करता है"],
        "answer_en": "Ensures consistent file name casing in imports",
        "answer_hi": "Imports में consistent file name casing ensure करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "What is the 'noErrorTruncation' option?",
        "question_hi": "'noErrorTruncation' option क्या है?",
        "options_en": ["Prevents truncation of error messages", "Enables error truncation", "Disables error messages", "Ignores errors"],
        "options_hi": ["Error messages की truncation prevent करता है", "Error truncation enable करता है", "Error messages disable करता है", "Errors ignore करता है"],
        "answer_en": "Prevents truncation of error messages",
        "answer_hi": "Error messages की truncation prevent करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "What does 'preserveConstEnums' do?",
        "question_hi": "'preserveConstEnums' क्या करता है?",
        "options_en": ["Preserves const enum declarations", "Removes const enums", "Ignores const enums", "Converts const enums to regular enums"],
        "options_hi": ["Const enum declarations preserve करता है", "Const enums remove करता है", "Const enums ignore करता है", "Const enums को regular enums में convert करता है"],
        "answer_en": "Preserves const enum declarations",
        "answer_hi": "Const enum declarations preserve करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "What is the 'incremental' option?",
        "question_hi": "'incremental' option क्या है?",
        "options_en": ["Enables incremental compilation", "Disables compilation", "Enables full compilation", "Disables incremental compilation"],
        "options_hi": ["Incremental compilation enable करता है", "Compilation disable करता है", "Full compilation enable करता है", "Incremental compilation disable करता है"],
        "answer_en": "Enables incremental compilation",
        "answer_hi": "Incremental compilation enable करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "What does 'tsBuildInfoFile' specify?",
        "question_hi": "'tsBuildInfoFile' क्या specify करता है?",
        "options_en": ["File to store incremental compilation information", "File to store source maps", "File to store declarations", "File to store outputs"],
        "options_hi": ["Incremental compilation information store करने के लिए file", "Source maps store करने के लिए file", "Declarations store करने के लिए file", "Outputs store करने के लिए file"],
        "answer_en": "File to store incremental compilation information",
        "answer_hi": "Incremental compilation information store करने के लिए file",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "What is the 'removeComments' option?",
        "question_hi": "'removeComments' option क्या है?",
        "options_en": ["Removes comments from output", "Preserves comments in output", "Adds comments to output", "Ignores comments"],
        "options_hi": ["Output से comments remove करता है", "Output में comments preserve करता है", "Output में comments add करता है", "Comments ignore करता है"],
        "answer_en": "Removes comments from output",
        "answer_hi": "Output से comments remove करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "What does 'noEmitOnError' do?",
        "question_hi": "'noEmitOnError' क्या करता है?",
        "options_en": ["Prevents emitting files if there are errors", "Emits files even with errors", "Ignores errors", "Reports errors but still emits"],
        "options_hi": ["Errors होने पर files emit करने से prevent करता है", "Errors के साथ भी files emit करता है", "Errors ignore करता है", "Errors report करता है लेकिन फिर भी emit करता है"],
        "answer_en": "Prevents emitting files if there are errors",
        "answer_hi": "Errors होने पर files emit करने से prevent करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "What is the 'experimentalDecorators' option?",
        "question_hi": "'experimentalDecorators' option क्या है?",
        "options_en": ["Enables experimental decorator support", "Disables decorators", "Enables stable decorators", "Ignores decorators"],
        "options_hi": ["Experimental decorator support enable करता है", "Decorators disable करता है", "Stable decorators enable करता है", "Decorators ignore करता है"],
        "answer_en": "Enables experimental decorator support",
        "answer_hi": "Experimental decorator support enable करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "What does 'emitDecoratorMetadata' do?",
        "question_hi": "'emitDecoratorMetadata' क्या करता है?",
        "options_en": ["Emits decorator metadata", "Removes decorator metadata", "Ignores decorator metadata", "Validates decorator metadata"],
        "options_hi": ["Decorator metadata emit करता है", "Decorator metadata remove करता है", "Decorator metadata ignore करता है", "Decorator metadata validate करता है"],
        "answer_en": "Emits decorator metadata",
        "answer_hi": "Decorator metadata emit करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "What is the 'jsx' option used for?",
        "question_hi": "'jsx' option किसके लिए use होती है?",
        "options_en": ["Specifies JSX code generation", "Specifies JavaScript output", "Specifies TypeScript input", "Specifies module output"],
        "options_hi": ["JSX code generation specify करती है", "JavaScript output specify करती है", "TypeScript input specify करती है", "Module output specify करती है"],
        "answer_en": "Specifies JSX code generation",
        "answer_hi": "JSX code generation specify करती है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "What are the possible values for 'jsx'?",
        "question_hi": "'jsx' के possible values क्या हैं?",
        "options_en": ["preserve, react, react-native", "jsx, tsx, react", "preserve, compile, transform", "none, all, some"],
        "options_hi": ["preserve, react, react-native", "jsx, tsx, react", "preserve, compile, transform", "none, all, some"],
        "answer_en": "preserve, react, react-native",
        "answer_hi": "preserve, react, react-native",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "What does 'jsxFactory' specify?",
        "question_hi": "'jsxFactory' क्या specify करता है?",
        "options_en": ["JSX factory function to use", "JSX output directory", "JSX input files", "JSX module system"],
        "options_hi": ["Use करने के लिए JSX factory function", "JSX output directory", "JSX input files", "JSX module system"],
        "answer_en": "JSX factory function to use",
        "answer_hi": "Use करने के लिए JSX factory function",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "What does 'jsxFragmentFactory' specify?",
        "question_hi": "'jsxFragmentFactory' क्या specify करता है?",
        "options_en": ["JSX fragment factory function", "JSX factory function", "JSX output function", "JSX input function"],
        "options_hi": ["JSX fragment factory function", "JSX factory function", "JSX output function", "JSX input function"],
        "answer_en": "JSX fragment factory function",
        "answer_hi": "JSX fragment factory function",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "What is the 'reactNamespace' option?",
        "question_hi": "'reactNamespace' option क्या है?",
        "options_en": ["Specifies React namespace for JSX", "Specifies React version", "Specifies React components", "Specifies React imports"],
        "options_hi": ["JSX के लिए React namespace specify करता है", "React version specify करता है", "React components specify करता है", "React imports specify करता है"],
        "answer_en": "Specifies React namespace for JSX",
        "answer_hi": "JSX के लिए React namespace specify करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "What does 'keyofStringsOnly' do?",
        "question_hi": "'keyofStringsOnly' क्या करता है?",
        "options_en": ["Treats keyof as keyof string", "Treats keyof as any", "Treats keyof as never", "Treats keyof as unknown"],
        "options_hi": ["keyof को keyof string के रूप में treat करता है", "keyof को any के रूप में treat करता है", "keyof को never के रूप में treat करता है", "keyof को unknown के रूप में treat करता है"],
        "answer_en": "Treats keyof as keyof string",
        "answer_hi": "keyof को keyof string के रूप में treat करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "What is the 'useDefineForClassFields' option?",
        "question_hi": "'useDefineForClassFields' option क्या है?",
        "options_en": ["Uses ECMAScript standard class fields", "Uses legacy class fields", "Disables class fields", "Ignores class fields"],
        "options_hi": ["ECMAScript standard class fields use करता है", "Legacy class fields use करता है", "Class fields disable करता है", "Class fields ignore करता है"],
        "answer_en": "Uses ECMAScript standard class fields",
        "answer_hi": "ECMAScript standard class fields use करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "What does 'useUnknownInCatchVariables' do?",
        "question_hi": "'useUnknownInCatchVariables' क्या करता है?",
        "options_en": ["Uses unknown type for catch variables", "Uses any type for catch variables", "Uses string type for catch variables", "Uses number type for catch variables"],
        "options_hi": ["Catch variables के लिए unknown type use करता है", "Catch variables के लिए any type use करता है", "Catch variables के लिए string type use करता है", "Catch variables के लिए number type use करता है"],
        "answer_en": "Uses unknown type for catch variables",
        "answer_hi": "Catch variables के लिए unknown type use करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "What is the 'noFallthroughCasesInSwitch' option?",
        "question_hi": "'noFallthroughCasesInSwitch' option क्या है?",
        "options_en": ["Reports fallthrough cases in switch statements", "Allows fallthrough cases", "Ignores switch statements", "Disables switch statements"],
        "options_hi": ["Switch statements में fallthrough cases report करता है", "Fallthrough cases allow करता है", "Switch statements ignore करता है", "Switch statements disable करता है"],
        "answer_en": "Reports fallthrough cases in switch statements",
        "answer_hi": "Switch statements में fallthrough cases report करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "What does 'noImplicitAny' help prevent?",
        "question_hi": "'noImplicitAny' क्या prevent करने में help करता है?",
        "options_en": ["Accidental use of any type", "Intentional use of any type", "Use of unknown type", "Use of never type"],
        "options_hi": ["Any type के accidental use को prevent करता है", "Any type के intentional use को prevent करता है", "Unknown type के use को prevent करता है", "Never type के use को prevent करता है"],
        "answer_en": "Accidental use of any type",
        "answer_hi": "Any type के accidental use को prevent करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "What is the benefit of 'strictNullChecks'?",
        "question_hi": "'strictNullChecks' का benefit क्या है?",
        "options_en": ["Catches null and undefined errors at compile time", "Makes code run faster", "Reduces file size", "Improves performance"],
        "options_hi": ["Compile time पर null और undefined errors catch करता है", "Code को faster run करता है", "File size reduce करता है", "Performance improve करता है"],
        "answer_en": "Catches null and undefined errors at compile time",
        "answer_hi": "Compile time पर null और undefined errors catch करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "What does 'noUncheckedIndexedAccess' do?",
        "question_hi": "'noUncheckedIndexedAccess' क्या करता है?",
        "options_en": ["Adds undefined to indexed access types", "Removes undefined from indexed access", "Ignores indexed access", "Disables indexed access"],
        "options_hi": ["Indexed access types में undefined add करता है", "Indexed access से undefined remove करता है", "Indexed access ignore करता है", "Indexed access disable करता है"],
        "answer_en": "Adds undefined to indexed access types",
        "answer_hi": "Indexed access types में undefined add करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "What is the purpose of 'exactOptionalPropertyTypes'?",
        "question_hi": "'exactOptionalPropertyTypes' का purpose क्या है?",
        "options_en": ["Prevents assigning undefined to optional properties", "Allows undefined for optional properties", "Requires undefined for optional properties", "Ignores optional properties"],
        "options_hi": ["Optional properties को undefined assign करने से prevent करता है", "Optional properties के लिए undefined allow करता है", "Optional properties के लिए undefined require करता है", "Optional properties ignore करता है"],
        "answer_en": "Prevents assigning undefined to optional properties",
        "answer_hi": "Optional properties को undefined assign करने से prevent करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "What does 'noPropertyAccessFromIndexSignature' do?",
        "question_hi": "'noPropertyAccessFromIndexSignature' क्या करता है?",
        "options_en": ["Requires index access for index signature properties", "Allows property access for index signatures", "Disables index signatures", "Ignores index signatures"],
        "options_hi": ["Index signature properties के लिए index access require करता है", "Index signatures के लिए property access allow करता है", "Index signatures disable करता है", "Index signatures ignore करता है"],
        "answer_en": "Requires index access for index signature properties",
        "answer_hi": "Index signature properties के लिए index access require करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "What is the 'noUncheckedIndexedAccess' option?",
        "question_hi": "'noUncheckedIndexedAccess' option क्या है?",
        "options_en": ["Includes undefined in index access results", "Excludes undefined from index access", "Ignores index access", "Disables index access"],
        "options_hi": ["Index access results में undefined include करता है", "Index access से undefined exclude करता है", "Index access ignore करता है", "Index access disable करता है"],
        "answer_en": "Includes undefined in index access results",
        "answer_hi": "Index access results में undefined include करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "What does 'allowUnreachableCode' do?",
        "question_hi": "'allowUnreachableCode' क्या करता है?",
        "options_en": ["Allows unreachable code", "Disables unreachable code", "Removes unreachable code", "Ignores unreachable code"],
        "options_hi": ["Unreachable code allow करता है", "Unreachable code disable करता है", "Unreachable code remove करता है", "Unreachable code ignore करता है"],
        "answer_en": "Allows unreachable code",
        "answer_hi": "Unreachable code allow करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "What does 'allowUnusedLabels' do?",
        "question_hi": "'allowUnusedLabels' क्या करता है?",
        "options_en": ["Allows unused labels", "Disables unused labels", "Removes unused labels", "Ignores unused labels"],
        "options_hi": ["Unused labels allow करता है", "Unused labels disable करता है", "Unused labels remove करता है", "Unused labels ignore करता है"],
        "answer_en": "Allows unused labels",
        "answer_hi": "Unused labels allow करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "What is the 'assumeChangesOnlyAffectDirectDependencies' option?",
        "question_hi": "'assumeChangesOnlyAffectDirectDependencies' option क्या है?",
        "options_en": ["Optimizes rebuilds by assuming limited dependency effects", "Forces full rebuilds", "Disables rebuilds", "Ignores dependencies"],
        "options_hi": ["Limited dependency effects assume करके rebuilds optimize करता है", "Full rebuilds force करता है", "Rebuilds disable करता है", "Dependencies ignore करता है"],
        "answer_en": "Optimizes rebuilds by assuming limited dependency effects",
        "answer_hi": "Limited dependency effects assume करके rebuilds optimize करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "What does 'charset' specify?",
        "question_hi": "'charset' क्या specify करता है?",
        "options_en": ["Character set for input files", "Character set for output files", "Character set for source maps", "Character set for declarations"],
        "options_hi": ["Input files के लिए character set", "Output files के लिए character set", "Source maps के लिए character set", "Declarations के लिए character set"],
        "answer_en": "Character set for input files",
        "answer_hi": "Input files के लिए character set",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "What is the 'diagnostics' option?",
        "question_hi": "'diagnostics' option क्या है?",
        "options_en": ["Shows diagnostic information", "Hides diagnostic information", "Ignores diagnostics", "Disables diagnostics"],
        "options_hi": ["Diagnostic information show करता है", "Diagnostic information hide करता है", "Diagnostics ignore करता है", "Diagnostics disable करता है"],
        "answer_en": "Shows diagnostic information",
        "answer_hi": "Diagnostic information show करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "What does 'explainFiles' do?",
        "question_hi": "'explainFiles' क्या करता है?",
        "options_en": ["Explains why files were included in compilation", "Explains why files were excluded", "Lists all files", "Shows file dependencies"],
        "options_hi": ["Explain करता है कि files compilation में क्यों include हुईं", "Explain करता है कि files क्यों exclude हुईं", "सभी files list करता है", "File dependencies show करता है"],
        "answer_en": "Explains why files were included in compilation",
        "answer_hi": "Explain करता है कि files compilation में क्यों include हुईं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "What is the 'extendedDiagnostics' option?",
        "question_hi": "'extendedDiagnostics' option क्या है?",
        "options_en": ["Shows extended diagnostic information", "Shows basic diagnostics", "Hides diagnostics", "Disables diagnostics"],
        "options_hi": ["Extended diagnostic information show करता है", "Basic diagnostics show करता है", "Diagnostics hide करता है", "Diagnostics disable करता है"],
        "answer_en": "Shows extended diagnostic information",
        "answer_hi": "Extended diagnostic information show करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "What does 'generateCpuProfile' do?",
        "question_hi": "'generateCpuProfile' क्या करता है?",
        "options_en": ["Generates CPU profile for performance analysis", "Generates memory profile", "Generates coverage report", "Generates type report"],
        "options_hi": ["Performance analysis के लिए CPU profile generate करता है", "Memory profile generate करता है", "Coverage report generate करता है", "Type report generate करता है"],
        "answer_en": "Generates CPU profile for performance analysis",
        "answer_hi": "Performance analysis के लिए CPU profile generate करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "What is the 'listEmittedFiles' option?",
        "question_hi": "'listEmittedFiles' option क्या है?",
        "options_en": ["Lists all emitted files", "Lists source files", "Lists declaration files", "Lists all files"],
        "options_hi": ["सभी emitted files list करता है", "Source files list करता है", "Declaration files list करता है", "सभी files list करता है"],
        "answer_en": "Lists all emitted files",
        "answer_hi": "सभी emitted files list करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "What does 'listFiles' do?",
        "question_hi": "'listFiles' क्या करता है?",
        "options_en": ["Lists all files parsed by TypeScript", "Lists emitted files", "Lists declaration files", "Lists source files"],
        "options_hi": ["TypeScript द्वारा parsed सभी files list करता है", "Emitted files list करता है", "Declaration files list करता है", "Source files list करता है"],
        "answer_en": "Lists all files parsed by TypeScript",
        "answer_hi": "TypeScript द्वारा parsed सभी files list करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "What is the 'traceResolution' option?",
        "question_hi": "'traceResolution' option क्या है?",
        "options_en": ["Traces module resolution process", "Traces compilation process", "Traces type checking", "Traces emission process"],
        "options_hi": ["Module resolution process trace करता है", "Compilation process trace करता है", "Type checking trace करता है", "Emission process trace करता है"],
        "answer_en": "Traces module resolution process",
        "answer_hi": "Module resolution process trace करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "What does 'disableReferencedProjectLoad' do?",
        "question_hi": "'disableReferencedProjectLoad' क्या करता है?",
        "options_en": ["Disables loading referenced projects", "Enables referenced project loading", "Ignores referenced projects", "Deletes referenced projects"],
        "options_hi": ["Referenced projects loading disable करता है", "Referenced project loading enable करता है", "Referenced projects ignore करता है", "Referenced projects delete करता है"],
        "answer_en": "Disables loading referenced projects",
        "answer_hi": "Referenced projects loading disable करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "What does 'disableSolutionSearching' do?",
        "question_hi": "'disableSolutionSearching' क्या करता है?",
        "options_en": ["Disables solution style TSConfig search", "Enables solution searching", "Ignores solution files", "Deletes solution files"],
        "options_hi": ["Solution style TSConfig search disable करता है", "Solution searching enable करता है", "Solution files ignore करता है", "Solution files delete करता है"],
        "answer_en": "Disables solution style TSConfig search",
        "answer_hi": "Solution style TSConfig search disable करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "What does 'disableSourceOfProjectReferenceRedirect' do?",
        "question_hi": "'disableSourceOfProjectReferenceRedirect' क्या करता है?",
        "options_en": ["Disables source file redirection for project references", "Enables redirection", "Ignores project references", "Deletes project references"],
        "options_hi": ["Project references के लिए source file redirection disable करता है", "Redirection enable करता है", "Project references ignore करता है", "Project references delete करता है"],
        "answer_en": "Disables source file redirection for project references",
        "answer_hi": "Project references के लिए source file redirection disable करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "What is the 'pretty' option?",
        "question_hi": "'pretty' option क्या है?",
        "options_en": ["Enables colorful and formatted output", "Disables formatted output", "Enables minimal output", "Disables all output"],
        "options_hi": ["Colorful और formatted output enable करता है", "Formatted output disable करता है", "Minimal output enable करता है", "सभी output disable करता है"],
        "answer_en": "Enables colorful and formatted output",
        "answer_hi": "Colorful और formatted output enable करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "What does 'stripInternal' do?",
        "question_hi": "'stripInternal' क्या करता है?",
        "options_en": ["Removes members marked with @internal", "Adds internal members", "Ignores internal members", "Validates internal members"],
        "options_hi": ["@internal से marked members remove करता है", "Internal members add करता है", "Internal members ignore करता है", "Internal members validate करता है"],
        "answer_en": "Removes members marked with @internal",
        "answer_hi": "@internal से marked members remove करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "What is the 'suppressExcessPropertyErrors' option?",
        "question_hi": "'suppressExcessPropertyErrors' option क्या है?",
        "options_en": ["Suppresses excess property checking errors", "Enables excess property checking", "Ignores property errors", "Disables property checking"],
        "options_hi": ["Excess property checking errors suppress करता है", "Excess property checking enable करता है", "Property errors ignore करता है", "Property checking disable करता है"],
        "answer_en": "Suppresses excess property checking errors",
        "answer_hi": "Excess property checking errors suppress करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "What does 'suppressImplicitAnyIndexErrors' do?",
        "question_hi": "'suppressImplicitAnyIndexErrors' क्या करता है?",
        "options_en": ["Suppresses implicit any index errors", "Enables implicit any errors", "Ignores index errors", "Disables index checking"],
        "options_hi": ["Implicit any index errors suppress करता है", "Implicit any errors enable करता है", "Index errors ignore करता है", "Index checking disable करता है"],
        "answer_en": "Suppresses implicit any index errors",
        "answer_hi": "Implicit any index errors suppress करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "What is the 'noStrictGenericChecks' option?",
        "question_hi": "'noStrictGenericChecks' option क्या है?",
        "options_en": ["Disables strict generic checks", "Enables strict generic checks", "Ignores generic checks", "Disables all generic checks"],
        "options_hi": ["Strict generic checks disable करता है", "Strict generic checks enable करता है", "Generic checks ignore करता है", "सभी generic checks disable करता है"],
        "answer_en": "Disables strict generic checks",
        "answer_hi": "Strict generic checks disable करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "What does 'useDefineForClassFields' affect?",
        "question_hi": "'useDefineForClassFields' किसे affect करता है?",
        "options_en": ["Class field initialization behavior", "Class method behavior", "Class constructor behavior", "Class inheritance behavior"],
        "options_hi": ["Class field initialization behavior", "Class method behavior", "Class constructor behavior", "Class inheritance behavior"],
        "answer_en": "Class field initialization behavior",
        "answer_hi": "Class field initialization behavior",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "What is the 'declarationDir' option?",
        "question_hi": "'declarationDir' option क्या है?",
        "options_en": ["Output directory for declaration files", "Output directory for JavaScript files", "Input directory for source files", "Root directory for project"],
        "options_hi": ["Declaration files के लिए output directory", "JavaScript files के लिए output directory", "Source files के लिए input directory", "Project के लिए root directory"],
        "answer_en": "Output directory for declaration files",
        "answer_hi": "Declaration files के लिए output directory",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "What does 'emitDeclarationOnly' do?",
        "question_hi": "'emitDeclarationOnly' क्या करता है?",
        "options_en": ["Emits only declaration files", "Emits only JavaScript files", "Emits both declarations and JavaScript", "Emits nothing"],
        "options_hi": ["केवल declaration files emit करता है", "केवल JavaScript files emit करता है", "Declarations और JavaScript दोनों emit करता है", "कुछ नहीं emit करता"],
        "answer_en": "Emits only declaration files",
        "answer_hi": "केवल declaration files emit करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "What is the 'importsNotUsedAsValues' option?",
        "question_hi": "'importsNotUsedAsValues' option क्या है?",
        "options_en": ["Controls how imports are handled when only used for types", "Controls all imports", "Controls exports", "Controls modules"],
        "options_hi": ["Control करता है कि imports कैसे handle होते हैं जब केवल types के लिए use होते हैं", "सभी imports control करता है", "Exports control करता है", "Modules control करता है"],
        "answer_en": "Controls how imports are handled when only used for types",
        "answer_hi": "Control करता है कि imports कैसे handle होते हैं जब केवल types के लिए use होते हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "What are the possible values for 'importsNotUsedAsValues'?",
        "question_hi": "'importsNotUsedAsValues' के possible values क्या हैं?",
        "options_en": ["remove, preserve, error", "keep, delete, ignore", "all, some, none", "true, false, auto"],
        "options_hi": ["remove, preserve, error", "keep, delete, ignore", "all, some, none", "true, false, auto"],
        "answer_en": "remove, preserve, error",
        "answer_hi": "remove, preserve, error",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "What does 'preserveValueImports' do?",
        "question_hi": "'preserveValueImports' क्या करता है?",
        "options_en": ["Preserves value imports that are only used for types", "Removes value imports", "Ignores value imports", "Validates value imports"],
        "options_hi": ["Value imports preserve करता है जो केवल types के लिए use होते हैं", "Value imports remove करता है", "Value imports ignore करता है", "Value imports validate करता है"],
        "answer_en": "Preserves value imports that are only used for types",
        "answer_hi": "Value imports preserve करता है जो केवल types के लिए use होते हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "What is the 'allowUmdGlobalAccess' option?",
        "question_hi": "'allowUmdGlobalAccess' option क्या है?",
        "options_en": ["Allows accessing UMD globals from modules", "Disables UMD global access", "Ignores UMD modules", "Deletes UMD globals"],
        "options_hi": ["Modules से UMD globals access allow करता है", "UMD global access disable करता है", "UMD modules ignore करता है", "UMD globals delete करता है"],
        "answer_en": "Allows accessing UMD globals from modules",
        "answer_hi": "Modules से UMD globals access allow करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "What does 'resolveJsonModule' do?",
        "question_hi": "'resolveJsonModule' क्या करता है?",
        "options_en": ["Allows importing JSON modules", "Disables JSON imports", "Ignores JSON files", "Validates JSON files"],
        "options_hi": ["JSON modules import allow करता है", "JSON imports disable करता है", "JSON files ignore करता है", "JSON files validate करता है"],
        "answer_en": "Allows importing JSON modules",
        "answer_hi": "JSON modules import allow करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "What is the 'maxNodeModuleJsDepth' option?",
        "question_hi": "'maxNodeModuleJsDepth' option क्या है?",
        "options_en": ["Maximum depth for checking node_modules", "Minimum depth for checking", "Depth for source files", "Depth for output files"],
        "options_hi": ["node_modules checking के लिए maximum depth", "Checking के लिए minimum depth", "Source files के लिए depth", "Output files के लिए depth"],
        "answer_en": "Maximum depth for checking node_modules",
        "answer_hi": "node_modules checking के लिए maximum depth",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "What does 'allowArbitraryExtensions' do?",
        "question_hi": "'allowArbitraryExtensions' क्या करता है?",
        "options_en": ["Allows imports with arbitrary extensions", "Disables arbitrary extensions", "Ignores extensions", "Validates extensions"],
        "options_hi": ["Arbitrary extensions वाले imports allow करता है", "Arbitrary extensions disable करता है", "Extensions ignore करता है", "Extensions validate करता है"],
        "answer_en": "Allows imports with arbitrary extensions",
        "answer_hi": "Arbitrary extensions वाले imports allow करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "What is the 'allowImportingTsExtensions' option?",
        "question_hi": "'allowImportingTsExtensions' option क्या है?",
        "options_en": ["Allows importing TypeScript files with extensions", "Disables TypeScript imports", "Ignores TypeScript files", "Validates TypeScript imports"],
        "options_hi": ["Extensions वाले TypeScript files import allow करता है", "TypeScript imports disable करता है", "TypeScript files ignore करता है", "TypeScript imports validate करता है"],
        "answer_en": "Allows importing TypeScript files with extensions",
        "answer_hi": "Extensions वाले TypeScript files import allow करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "What does 'rewriteRelativeImportExtensions' do?",
        "question_hi": "'rewriteRelativeImportExtensions' क्या करता है?",
        "options_en": ["Rewrites relative import extensions", "Preserves import extensions", "Removes import extensions", "Ignores import extensions"],
        "options_hi": ["Relative import extensions rewrite करता है", "Import extensions preserve करता है", "Import extensions remove करता है", "Import extensions ignore करता है"],
        "answer_en": "Rewrites relative import extensions",
        "answer_hi": "Relative import extensions rewrite करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "What is the 'useDefineForClassFields' compatibility issue?",
        "question_hi": "'useDefineForClassFields' compatibility issue क्या है?",
        "options_en": ["Breaks legacy class field behavior", "Breaks modern class fields", "Breaks inheritance", "Breaks methods"],
        "options_hi": ["Legacy class field behavior break करता है", "Modern class fields break करता है", "Inheritance break करता है", "Methods break करता है"],
        "answer_en": "Breaks legacy class field behavior",
        "answer_hi": "Legacy class field behavior break करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "What does 'exactOptionalPropertyTypes' prevent?",
        "question_hi": "'exactOptionalPropertyTypes' क्या prevent करता है?",
        "options_en": ["Assigning undefined to optional properties", "Assigning null to optional properties", "Assigning values to optional properties", "Reading optional properties"],
        "options_hi": ["Optional properties को undefined assign करने से prevent करता है", "Optional properties को null assign करने से prevent करता है", "Optional properties को values assign करने से prevent करता है", "Optional properties read करने से prevent करता है"],
        "answer_en": "Assigning undefined to optional properties",
        "answer_hi": "Optional properties को undefined assign करने से prevent करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "What is the benefit of 'noUncheckedIndexedAccess'?",
        "question_hi": "'noUncheckedIndexedAccess' का benefit क्या है?",
        "options_en": ["Makes indexed access safer by including undefined", "Makes indexed access faster", "Makes indexed access simpler", "Makes indexed access more flexible"],
        "options_hi": ["Undefined include करके indexed access safer बनाता है", "Indexed access faster बनाता है", "Indexed access simpler बनाता है", "Indexed access more flexible बनाता है"],
        "answer_en": "Makes indexed access safer by including undefined",
        "answer_hi": "Undefined include करके indexed access safer बनाता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "What does 'noPropertyAccessFromIndexSignature' enforce?",
        "question_hi": "'noPropertyAccessFromIndexSignature' क्या enforce करता है?",
        "options_en": ["Using bracket notation for index signature properties", "Using dot notation for all properties", "Using no notation", "Using mixed notation"],
        "options_hi": ["Index signature properties के लिए bracket notation use करना", "सभी properties के लिए dot notation use करना", "कोई notation use नहीं करना", "Mixed notation use करना"],
        "answer_en": "Using bracket notation for index signature properties",
        "answer_hi": "Index signature properties के लिए bracket notation use करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "What is the purpose of 'strict' flag?",
        "question_hi": "'strict' flag का purpose क्या है?",
        "options_en": ["Enable all strict type checking options", "Disable all strict options", "Enable some strict options", "Disable type checking"],
        "options_hi": ["सभी strict type checking options enable करना", "सभी strict options disable करना", "कुछ strict options enable करना", "Type checking disable करना"],
        "answer_en": "Enable all strict type checking options",
        "answer_hi": "सभी strict type checking options enable करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "Which strict option helps prevent runtime null errors?",
        "question_hi": "कौन सा strict option runtime null errors prevent करने में help करता है?",
        "options_en": ["strictNullChecks", "noImplicitAny", "noImplicitReturns", "noUnusedLocals"],
        "options_hi": ["strictNullChecks", "noImplicitAny", "noImplicitReturns", "noUnusedLocals"],
        "answer_en": "strictNullChecks",
        "answer_hi": "strictNullChecks",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "What does 'noImplicitOverride' help with?",
        "question_hi": "'noImplicitOverride' किसमें help करता है?",
        "options_en": ["Making method overriding explicit", "Making inheritance explicit", "Making properties explicit", "Making methods private"],
        "options_hi": ["Method overriding explicit बनाने में", "Inheritance explicit बनाने में", "Properties explicit बनाने में", "Methods private बनाने में"],
        "answer_en": "Making method overriding explicit",
        "answer_hi": "Method overriding explicit बनाने में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "What is the default value for 'target' option?",
        "question_hi": "'target' option की default value क्या है?",
        "options_en": ["ES3", "ES5", "ES6", "ES2020"],
        "options_hi": ["ES3", "ES5", "ES6", "ES2020"],
        "answer_en": "ES3",
        "answer_hi": "ES3",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "What is the default value for 'module' option?",
        "question_hi": "'module' option की default value क्या है?",
        "options_en": ["CommonJS", "ES6", "AMD", "UMD"],
        "options_hi": ["CommonJS", "ES6", "AMD", "UMD"],
        "answer_en": "CommonJS",
        "answer_hi": "CommonJS",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "What does 'moduleResolution: node' do?",
        "question_hi": "'moduleResolution: node' क्या करता है?",
        "options_en": ["Uses Node.js module resolution algorithm", "Uses classic resolution", "Uses browser resolution", "Uses custom resolution"],
        "options_hi": ["Node.js module resolution algorithm use करता है", "Classic resolution use करता है", "Browser resolution use करता है", "Custom resolution use करता है"],
        "answer_en": "Uses Node.js module resolution algorithm",
        "answer_hi": "Node.js module resolution algorithm use करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "What is the purpose of 'baseUrl'?",
        "question_hi": "'baseUrl' का purpose क्या है?",
        "options_en": ["Base directory for non-relative module resolution", "Base directory for relative imports", "Base directory for output files", "Base directory for source files"],
        "options_hi": ["Non-relative module resolution के लिए base directory", "Relative imports के लिए base directory", "Output files के लिए base directory", "Source files के लिए base directory"],
        "answer_en": "Base directory for non-relative module resolution",
        "answer_hi": "Non-relative module resolution के लिए base directory",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "What do 'paths' allow you to do?",
        "question_hi": "'paths' आपको क्या करने allow करते हैं?",
        "options_en": ["Map import paths to actual locations", "Map output paths", "Map source paths", "Map module paths"],
        "options_hi": ["Import paths को actual locations में map करना", "Output paths map करना", "Source paths map करना", "Module paths map करना"],
        "answer_en": "Map import paths to actual locations",
        "answer_hi": "Import paths को actual locations में map करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "What is the purpose of 'typeRoots'?",
        "question_hi": "'typeRoots' का purpose क्या है?",
        "options_en": ["Specify locations for global type definitions", "Specify locations for local types", "Specify locations for source files", "Specify locations for output files"],
        "options_hi": ["Global type definitions के locations specify करना", "Local types के locations specify करना", "Source files के locations specify करना", "Output files के locations specify करना"],
        "answer_en": "Specify locations for global type definitions",
        "answer_hi": "Global type definitions के locations specify करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "What does 'types' restrict?",
        "question_hi": "'types' क्या restrict करता है?",
        "options_en": ["Which type packages are included", "Which source files are included", "Which output files are generated", "Which modules are resolved"],
        "options_hi": ["कौन से type packages include होते हैं", "कौन से source files include होते हैं", "कौन से output files generate होते हैं", "कौन से modules resolve होते हैं"],
        "answer_en": "Which type packages are included",
        "answer_hi": "कौन से type packages include होते हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "What is the benefit of 'skipLibCheck'?",
        "question_hi": "'skipLibCheck' का benefit क्या है?",
        "options_en": ["Faster compilation by skipping lib type checks", "More thorough type checking", "Better error messages", "More accurate types"],
        "options_hi": ["Lib type checks skip करके faster compilation", "More thorough type checking", "Better error messages", "More accurate types"],
        "answer_en": "Faster compilation by skipping lib type checks",
        "answer_hi": "Lib type checks skip करके faster compilation",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "What does 'forceConsistentCasingInFileNames' prevent?",
        "question_hi": "'forceConsistentCasingInFileNames' क्या prevent करता है?",
        "options_en": ["Case-related import errors on case-sensitive file systems", "All import errors", "Export errors", "Type errors"],
        "options_hi": ["Case-sensitive file systems पर case-related import errors", "सभी import errors", "Export errors", "Type errors"],
        "answer_en": "Case-related import errors on case-sensitive file systems",
        "answer_hi": "Case-sensitive file systems पर case-related import errors",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "What is the most important compiler option for TypeScript beginners?",
        "question_hi": "TypeScript beginners के लिए सबसे important compiler option कौन सी है?",
        "options_en": ["strict: true", "target: ES6", "module: CommonJS", "outDir: dist"],
        "options_hi": ["strict: true", "target: ES6", "module: CommonJS", "outDir: dist"],
        "answer_en": "strict: true",
        "answer_hi": "strict: true",
        "attempted": false,
        "selected": ""
    }
];

let currentQuestion = 0;
let language = "en";
let timeLeft = 60 * 60; 
let timerInterval;

// ----------------- Load Question -----------------
function loadQuestion(index) {
    const q = questions[index];
    if (!q) return; //  undefined error fix
   questions[index].visited = true;
    document.getElementById("question").textContent =
       `${q.num}. ${language === "en" ? q.question_en : q.question_hi}`;

    document.getElementById("questionCounter").textContent =
       ` Question ${index + 1} of ${questions.length}`;

    const optionsElement = document.getElementById("options");
    optionsElement.innerHTML = "";

    const options = language === "en" ? q.options_en : q.options_hi;

    options.forEach(option => {
        const isSelected = q.selected === option;

        const div = document.createElement("div");
        div.className = "option-box";

        div.style = `
            border: 2px solid ${isSelected ? "#007bff" : "#ccc"};
            background-color: ${isSelected ? "#e7f1ff" : "white"};
            padding: 10px;
            border-radius: 8px;
            margin: 6px 0;
            cursor: pointer;
        `;

        div.innerHTML = `
            <input type="radio" name="option" value="${option}" 
            ${isSelected ? "checked" : ""} style="margin-right:8px;">
            ${option}
        `;

        div.addEventListener("click", () => {
            markAttempted(index, option);
            loadQuestion(index);
        });

        optionsElement.appendChild(div);
    });

    updateNavigation();
}

// ----------------- Attempt Mark -----------------
function markAttempted(index, selectedAnswer) {
    questions[index].attempted = true;
    questions[index].selected = selectedAnswer;
    updateNavigation();
}

// ----------------- Next / Previous -----------------
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

function changeLanguage() {
    language = document.getElementById("languageSelect").value;
    loadQuestion(currentQuestion);
}

// ----------------- Final Submit -----------------
function submitQuiz() {
    let confirmation = confirm("Are you sure you want to submit the test?");
    if (!confirmation) return;

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

    localStorage.setItem("attempted", attempted);
    localStorage.setItem("notAttempted", notAttempted);
    localStorage.setItem("score", score);
    localStorage.setItem("results", JSON.stringify(results));

    let viewResult = confirm("Test submitted! Do you want to view result?");
    if (viewResult) {
        window.location.href = "/RTS/public/Deshbord/category/test/submit-test.html";
    }
}

// ----------------- Navigation Circles -----------------
function updateNavigation() {
    const nav = document.getElementById("circleContainer");
    nav.innerHTML = "";

    questions.forEach((q, i) => {
        let color = "gray"; // default: not visited

        if (i === currentQuestion) {
            color = "blue"; // current question
        } 
        else if (q.attempted) {
            color = "green"; // answered
        } 
        else if (q.visited) {
            color = "white"; // visited but not answered
        }

        nav.innerHTML += `
            <div class="circle" style="background:${color}; border:1px solid black;"
            onclick="jumpToQuestion(${i})">${i + 1}</div>
        `;
    });
}

function jumpToQuestion(index) {
    currentQuestion = index;
    loadQuestion(index);
}

// ----------------- Timer -----------------
function startTimer() {
    const timerElement = document.getElementById("timer");

    timerInterval = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert("Time's up!");
            submitQuiz();
        } else {
            const hours = String(Math.floor(timeLeft / 3600)).padStart(2, "0");
            const minutes = String(Math.floor((timeLeft % 3600) / 60)).padStart(2, "0");
            const seconds = String(timeLeft % 60).padStart(2, "0");

            timerElement.textContent = `Time Left: ${hours}:${minutes}:${seconds}`;
            timeLeft--;
        }
    }, 1000);
}

// ----------------- Camera & Movement Detection -----------------
let videoStream;
let movementCount = 0;

function startCamera() {
    const container = document.createElement("div");
    container.id = "camera-container";
    container.style = `
        position:fixed; top:10px; left:10px; width:130px; height:130px;
        border-radius:50%; overflow:hidden; border:3px solid red; z-index:9999;
    `;

    document.body.appendChild(container);

    const video = document.createElement("video");
    video.autoplay = true;
    video.playsinline = true;
    video.style = "width:100%; height:100%; object-fit:cover;";
    container.appendChild(video);

    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            video.srcObject = stream;
            videoStream = stream;
            detectMovement(video);
        })
        .catch(() => alert("Camera access denied!"));
}

function detectMovement(video) {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = 160;
    canvas.height = 160;

    let lastData = null;

    setInterval(() => {
        ctx.drawImage(video, 0, 0, 160, 160);
        const data = ctx.getImageData(0, 0, 160, 160);

        if (lastData) {
            let diff = 0;
            for (let i = 0; i < data.data.length; i += 4) {
                diff += Math.abs(data.data[i] - lastData.data[i]);
            }

            if (diff > 1000000) {
                movementCount++;

                if (movementCount === 1) alert("⚠ Alert 1: No movement detected!");
                if (movementCount === 2) alert("⚠ Alert 2: Head not moving!");
                if (movementCount === 3) {
                    alert("⚠ Alert 3: Restarting test...");
                    restartTest();
                }
            }
        }
        lastData = data;

    }, 2000);
}

function restartTest() {
    if (videoStream) videoStream.getTracks().forEach(t => t.stop());

    const cam = document.getElementById("camera-container");
    if (cam) cam.remove();

    movementCount = 0;
    currentQuestion = 0;
    timeLeft = 60 * 60;

    questions.forEach(q => {
        q.attempted = false;
        q.selected = null;
    });

    loadQuestion(0);
    startTimer();
    startCamera();
}

// ----------------- Page Load -----------------
window.onload = function () {
    loadQuestion(currentQuestion);
    startTimer();
    startCamera();
};