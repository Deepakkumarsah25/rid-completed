[
    {
        "num": 1,
        "question_en": "How do you declare a generic function in Go?",
        "question_hi": "Go में जेनरिक फंक्शन कैसे डिक्लेयर करते हैं?",
        "options_en": ["func name[T constraint](param T) T", "func name[T](param T) T", "generic func name[T](param T) T", "func name generic[T](param T) T"],
        "options_hi": ["func name[T constraint](param T) T", "func name[T](param T) T", "generic func name[T](param T) T", "func name generic[T](param T) T"],
        "answer_en": "func name[T constraint](param T) T",
        "answer_hi": "func name[T constraint](param T) T",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "What is the purpose of the 'any' type alias in Go?",
        "question_hi": "Go में 'any' टाइप एलियास का उद्देश्य क्या है?",
        "options_en": ["Alias for interface{}", "For any type", "Generic type", "Dynamic type"],
        "options_hi": ["interface{} के लिए एलियास", "किसी भी टाइप के लिए", "जेनरिक टाइप", "डायनामिक टाइप"],
        "answer_en": "Alias for interface{}",
        "answer_hi": "interface{} के लिए एलियास",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "How do you implement a generic stack in Go?",
        "question_hi": "Go में जेनरिक स्टैक कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["type Stack[T any] struct { elements []T }", "generic type Stack[T] struct { elements []T }", "type Stack generic[T] struct { elements []T }", "type Stack[T] struct { elements []T }"],
        "options_hi": ["type Stack[T any] struct { elements []T }", "generic type Stack[T] struct { elements []T }", "type Stack generic[T] struct { elements []T }", "type Stack[T] struct { elements []T }"],
        "answer_en": "type Stack[T any] struct { elements []T }",
        "answer_hi": "type Stack[T any] struct { elements []T }",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "What is the purpose of the 'comparable' constraint in Go generics?",
        "question_hi": "Go जेनरिक्स में 'comparable' कंस्ट्रेंट का उद्देश्य क्या है?",
        "options_en": ["Allows types that support == and !=", "For comparing values", "For equality checks", "For ordered types"],
        "options_hi": ["== और != सपोर्ट करने वाले टाइप की अनुमति देता है", "वैल्यू तुलना के लिए", "इक्वलिटी चेक के लिए", "ऑर्डर्ड टाइप के लिए"],
        "answer_en": "Allows types that support == and !=",
        "answer_hi": "== और != सपोर्ट करने वाले टाइप की अनुमति देता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "What is the purpose of the '~' token in Go generics?",
        "question_hi": "Go जेनरिक्स में '~' टोकन का उद्देश्य क्या है?",
        "options_en": ["Includes underlying types", "For approximation", "Type similarity", "For type sets"],
        "options_hi": ["अंडरलाइंग टाइप शामिल करता है", "अनुमान के लिए", "टाइप समानता", "टाइप सेट के लिए"],
        "answer_en": "Includes underlying types",
        "answer_hi": "अंडरलाइंग टाइप शामिल करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "How do you create a generic method in Go?",
        "question_hi": "Go में जेनरिक मेथड कैसे बनाते हैं?",
        "options_en": ["func (s *Stack[T]) Push(value T)", "generic func (s *Stack[T]) Push(value T)", "func (s *Stack) Push[T](value T)", "method (s *Stack[T]) Push(value T)"],
        "options_hi": ["func (s *Stack[T]) Push(value T)", "generic func (s *Stack[T]) Push(value T)", "func (s *Stack) Push[T](value T)", "method (s *Stack[T]) Push(value T)"],
        "answer_en": "func (s *Stack[T]) Push(value T)",
        "answer_hi": "func (s *Stack[T]) Push(value T)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "What is type inference in Go generics?",
        "question_hi": "Go जेनरिक्स में टाइप इनफरेंस क्या है?",
        "options_en": ["Compiler deduces type arguments", "Automatic type detection", "Type guessing", "Dynamic typing"],
        "options_hi": ["कम्पाइलर टाइप आर्गुमेंट डिड्यूस करता है", "ऑटोमैटिक टाइप डिटेक्शन", "टाइप गेसिंग", "डायनामिक टाइपिंग"],
        "answer_en": "Compiler deduces type arguments",
        "answer_hi": "कम्पाइलर टाइप आर्गुमेंट डिड्यूस करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "How do you specify multiple type parameters?",
        "question_hi": "मल्टीपल टाइप पैरामीटर कैसे स्पेसिफाई करते हैं?",
        "options_en": ["func name[T, U any](t T, u U)", "func name[T any, U any](t T, u U)", "func name[T, U](t T, u U)", "func name[T U any](t T, u U)"],
        "options_hi": ["func name[T, U any](t T, u U)", "func name[T any, U any](t T, u U)", "func name[T, U](t T, u U)", "func name[T U any](t T, u U)"],
        "answer_en": "func name[T, U any](t T, u U)",
        "answer_hi": "func name[T, U any](t T, u U)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "What is the purpose of type sets in Go generics?",
        "question_hi": "Go जेनरिक्स में टाइप सेट का उद्देश्य क्या है?",
        "options_en": ["Define interface of types", "Collection of types", "Type groups", "For type constraints"],
        "options_hi": ["टाइप का इंटरफेस डिफाइन करना", "टाइप का कलेक्शन", "टाइप ग्रुप", "टाइप कंस्ट्रेंट के लिए"],
        "answer_en": "Define interface of types",
        "answer_hi": "टाइप का इंटरफेस डिफाइन करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "How do you create a custom constraint?",
        "question_hi": "कस्टम कंस्ट्रेंट कैसे बनाते हैं?",
        "options_en": ["type Number interface { int | float64 }", "constraint Number { int | float64 }", "interface Number { int | float64 }", "type Number constraint { int | float64 }"],
        "options_hi": ["type Number interface { int | float64 }", "constraint Number { int | float64 }", "interface Number { int | float64 }", "type Number constraint { int | float64 }"],
        "answer_en": "type Number interface { int | float64 }",
        "answer_hi": "type Number interface { int | float64 }",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "What is the difference between type parameters and type arguments?",
        "question_hi": "टाइप पैरामीटर और टाइप आर्गुमेंट में क्या अंतर है?",
        "options_en": ["Parameters are in declaration, arguments in instantiation", "No difference", "Arguments are values", "Parameters are concrete"],
        "options_hi": ["पैरामीटर डिक्लेरेशन में, आर्गुमेंट इंस्टेंटिएशन में", "कोई अंतर नहीं", "आर्गुमेंट वैल्यू हैं", "पैरामीटर कंक्रीट हैं"],
        "answer_en": "Parameters are in declaration, arguments in instantiation",
        "answer_hi": "पैरामीटर डिक्लेरेशन में, आर्गुमेंट इंस्टेंटिएशन में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "How do you instantiate a generic type?",
        "question_hi": "जेनरिक टाइप को कैसे इंस्टेंटिएट करते हैं?",
        "options_en": ["var stack Stack[int]", "var stack generic Stack[int]", "var stack Stack generic[int]", "instantiate Stack[int] stack"],
        "options_hi": ["var stack Stack[int]", "var stack generic Stack[int]", "var stack Stack generic[int]", "instantiate Stack[int] stack"],
        "answer_en": "var stack Stack[int]",
        "answer_hi": "var stack Stack[int]",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "What is the purpose of the 'ordered' constraint?",
        "question_hi": "'ordered' कंस्ट्रेंट का उद्देश्य क्या है?",
        "options_en": ["For types with ordering operators", "For sorted types", "For comparable types", "For numeric types"],
        "options_hi": ["ऑर्डरिंग ऑपरेटर वाले टाइप के लिए", "सॉर्टेड टाइप के लिए", "कम्पेरेबल टाइप के लिए", "न्यूमेरिक टाइप के लिए"],
        "answer_en": "For types with ordering operators",
        "answer_hi": "ऑर्डरिंग ऑपरेटर वाले टाइप के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "How do you use constraints from the 'constraints' package?",
        "question_hi": "'constraints' पैकेज से कंस्ट्रेंट कैसे उपयोग करते हैं?",
        "options_en": ["import 'golang.org/x/exp/constraints'", "import 'constraints'", "use constraints package", "include constraints"],
        "options_hi": ["import 'golang.org/x/exp/constraints'", "import 'constraints'", "constraints पैकेज उपयोग करें", "constraints इन्क्लूड करें"],
        "answer_en": "import 'golang.org/x/exp/constraints'",
        "answer_hi": "import 'golang.org/x/exp/constraints'",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "What is type erasure in Go generics?",
        "question_hi": "Go जेनरिक्स में टाइप इरेज़र क्या है?",
        "options_en": ["Go doesn't use type erasure", "Runtime type removal", "Compile-time type removal", "Type information loss"],
        "options_hi": ["Go टाइप इरेज़र का उपयोग नहीं करता", "रनटाइम टाइप रिमूवल", "कम्पाइल-टाइम टाइप रिमूवल", "टाइप इनफार्मेशन लॉस"],
        "answer_en": "Go doesn't use type erasure",
        "answer_hi": "Go टाइप इरेज़र का उपयोग नहीं करता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "How do you create a generic interface?",
        "question_hi": "जेनरिक इंटरफेस कैसे बनाते हैं?",
        "options_en": ["type Repository[T any] interface { Get(id int) T }", "generic interface Repository[T] { Get(id int) T }", "interface Repository generic[T] { Get(id int) T }", "type Repository generic[T] interface { Get(id int) T }"],
        "options_hi": ["type Repository[T any] interface { Get(id int) T }", "generic interface Repository[T] { Get(id int) T }", "interface Repository generic[T] { Get(id int) T }", "type Repository generic[T] interface { Get(id int) T }"],
        "answer_en": "type Repository[T any] interface { Get(id int) T }",
        "answer_hi": "type Repository[T any] interface { Get(id int) T }",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "What is the purpose of the 'union' operator in constraints?",
        "question_hi": "कंस्ट्रेंट में 'union' ऑपरेटर का उद्देश्य क्या है?",
        "options_en": ["Combine multiple types", "Type union", "Multiple type options", "Type alternatives"],
        "options_hi": ["मल्टीपल टाइप कम्बाइन करना", "टाइप यूनियन", "मल्टीपल टाइप ऑप्शन", "टाइप अल्टरनेटिव"],
        "answer_en": "Combine multiple types",
        "answer_hi": "मल्टीपल टाइप कम्बाइन करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "How do you handle generic slices?",
        "question_hi": "जेनरिक स्लाइस कैसे हैंडल करते हैं?",
        "options_en": ["func Process[T any](slice []T)", "func Process[[]T any](slice T)", "func Process(slice []generic T)", "generic func Process(slice []T)"],
        "options_hi": ["func Process[T any](slice []T)", "func Process[[]T any](slice T)", "func Process(slice []generic T)", "generic func Process(slice []T)"],
        "answer_en": "func Process[T any](slice []T)",
        "answer_hi": "func Process[T any](slice []T)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "What is monomorphization in Go generics?",
        "question_hi": "Go जेनरिक्स में मोनोमोर्फाइज़ेशन क्या है?",
        "options_en": ["Creating specialized code for each type", "Type generalization", "Runtime optimization", "Code duplication"],
        "options_hi": ["प्रत्येक टाइप के लिए स्पेशलाइज्ड कोड बनाना", "टाइप जनरलाइज़ेशन", "रनटाइम ऑप्टिमाइज़ेशन", "कोड डुप्लिकेशन"],
        "answer_en": "Creating specialized code for each type",
        "answer_hi": "प्रत्येक टाइप के लिए स्पेशलाइज्ड कोड बनाना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "How do you use generic types with methods?",
        "question_hi": "मेथड के साथ जेनरिक टाइप कैसे उपयोग करते हैं?",
        "options_en": ["type Container[T any] struct { value T } then func (c *Container[T]) Get() T", "generic type Container[T] with method Get() T", "type Container[T] struct with generic method", "struct Container[T] with func Get() T"],
        "options_hi": ["type Container[T any] struct { value T } फिर func (c *Container[T]) Get() T", "generic type Container[T] with method Get() T", "type Container[T] struct with generic method", "struct Container[T] with func Get() T"],
        "answer_en": "type Container[T any] struct { value T } then func (c *Container[T]) Get() T",
        "answer_hi": "type Container[T any] struct { value T } फिर func (c *Container[T]) Get() T",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "What is the purpose of the 'golang.org/x/exp' package?",
        "question_hi": "'golang.org/x/exp' पैकेज का उद्देश्य क्या है?",
        "options_en": ["Experimental features", "Extended functionality", "Extra packages", "Expanded library"],
        "options_hi": ["एक्सपेरिमेंटल फीचर", "एक्सटेंडेड फंक्शनैलिटी", "एक्स्ट्रा पैकेज", "एक्सपैंडेड लाइब्रेरी"],
        "answer_en": "Experimental features",
        "answer_hi": "एक्सपेरिमेंटल फीचर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "How do you create a generic map?",
        "question_hi": "जेनरिक मैप कैसे बनाते हैं?",
        "options_en": ["type GenericMap[K comparable, V any] map[K]V", "generic map[K, V] map[K]V", "type Map[K V] map[K]V", "generic type Map[K comparable, V any]"],
        "options_hi": ["type GenericMap[K comparable, V any] map[K]V", "generic map[K, V] map[K]V", "type Map[K V] map[K]V", "generic type Map[K comparable, V any]"],
        "answer_en": "type GenericMap[K comparable, V any] map[K]V",
        "answer_hi": "type GenericMap[K comparable, V any] map[K]V",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "What is the difference between interface{} and any?",
        "question_hi": "interface{} और any में क्या अंतर है?",
        "options_en": ["They are aliases, no functional difference", "any is for generics", "interface{} is deprecated", "any is more restrictive"],
        "options_hi": ["वे एलियास हैं, कोई फंक्शनल अंतर नहीं", "any जेनरिक्स के लिए है", "interface{} डिप्रिकेटेड है", "any ज्यादा रिस्ट्रिक्टिव है"],
        "answer_en": "They are aliases, no functional difference",
        "answer_hi": "वे एलियास हैं, कोई फंक्शनल अंतर नहीं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "How do you use generic types with channels?",
        "question_hi": "चैनल के साथ जेनरिक टाइप कैसे उपयोग करते हैं?",
        "options_en": ["chan T", "generic chan T", "chan generic T", "channel[T]"],
        "options_hi": ["chan T", "generic chan T", "chan generic T", "channel[T]"],
        "answer_en": "chan T",
        "answer_hi": "chan T",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "What is the purpose of type parameters in struct definitions?",
        "question_hi": "स्ट्रक्चर डेफिनिशन में टाइप पैरामीटर का उद्देश्य क्या है?",
        "options_en": ["Make structs generic", "Type-safe structs", "Dynamic struct fields", "Generic field types"],
        "options_hi": ["स्ट्रक्चर को जेनरिक बनाना", "टाइप-सेफ स्ट्रक्चर", "डायनामिक स्ट्रक्चर फील्ड", "जेनरिक फील्ड टाइप"],
        "answer_en": "Make structs generic",
        "answer_hi": "स्ट्रक्चर को जेनरिक बनाना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "How do you implement a generic binary tree?",
        "question_hi": "जेनरिक बाइनरी ट्री कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["type Tree[T any] struct { Value T; Left, Right *Tree[T] }", "generic type Tree[T] struct { Value T; Left, Right *Tree }", "type Tree generic[T] struct { Value T; Left, Right *Tree[T] }", "struct Tree[T] { Value T; Left, Right *Tree[T] }"],
        "options_hi": ["type Tree[T any] struct { Value T; Left, Right *Tree[T] }", "generic type Tree[T] struct { Value T; Left, Right *Tree }", "type Tree generic[T] struct { Value T; Left, Right *Tree[T] }", "struct Tree[T] { Value T; Left, Right *Tree[T] }"],
        "answer_en": "type Tree[T any] struct { Value T; Left, Right *Tree[T] }",
        "answer_hi": "type Tree[T any] struct { Value T; Left, Right *Tree[T] }",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "What is the purpose of the 'constraints.Ordered' type?",
        "question_hi": "'constraints.Ordered' टाइप का उद्देश्य क्या है?",
        "options_en": ["Types that support ordering operators", "For sorted data", "Comparable types with order", "Numeric types with order"],
        "options_hi": ["ऑर्डरिंग ऑपरेटर सपोर्ट करने वाले टाइप", "सॉर्टेड डेटा के लिए", "ऑर्डर के साथ कम्पेरेबल टाइप", "ऑर्डर के साथ न्यूमेरिक टाइप"],
        "answer_en": "Types that support ordering operators",
        "answer_hi": "ऑर्डरिंग ऑपरेटर सपोर्ट करने वाले टाइप",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "How do you use generics with function types?",
        "question_hi": "फंक्शन टाइप के साथ जेनरिक्स कैसे उपयोग करते हैं?",
        "options_en": ["type Transformer[T any] func(T) T", "generic type Transformer[T] func(T) T", "type Transformer generic[T] func(T) T", "func type Transformer[T] func(T) T"],
        "options_hi": ["type Transformer[T any] func(T) T", "generic type Transformer[T] func(T) T", "type Transformer generic[T] func(T) T", "func type Transformer[T] func(T) T"],
        "answer_en": "type Transformer[T any] func(T) T",
        "answer_hi": "type Transformer[T any] func(T) T",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "What is the difference between generic functions and interface-based polymorphism?",
        "question_hi": "जेनरिक फंक्शन और इंटरफेस-बेस्ड पोलीमोर्फिज्म में क्या अंतर है?",
        "options_en": ["Generics are compile-time, interfaces are runtime", "No difference", "Interfaces are faster", "Generics are more flexible"],
        "options_hi": ["जेनरिक्स कम्पाइल-टाइम हैं, इंटरफेस रनटाइम हैं", "कोई अंतर नहीं", "इंटरफेस तेज हैं", "जेनरिक्स ज्यादा फ्लेक्सिबल हैं"],
        "answer_en": "Generics are compile-time, interfaces are runtime",
        "answer_hi": "जेनरिक्स कम्पाइल-टाइम हैं, इंटरफेस रनटाइम हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "How do you create a generic utility function?",
        "question_hi": "जेनरिक यूटिलिटी फंक्शन कैसे बनाते हैं?",
        "options_en": ["func Max[T constraints.Ordered](a, b T) T", "generic func Max[T](a, b T) T", "func Max generic[T](a, b T) T", "func Max[T Ordered](a, b T) T"],
        "options_hi": ["func Max[T constraints.Ordered](a, b T) T", "generic func Max[T](a, b T) T", "func Max generic[T](a, b T) T", "func Max[T Ordered](a, b T) T"],
        "answer_en": "func Max[T constraints.Ordered](a, b T) T",
        "answer_hi": "func Max[T constraints.Ordered](a, b T) T",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "What is the purpose of the 'golang.org/x/exp/slices' package?",
        "question_hi": "'golang.org/x/exp/slices' पैकेज का उद्देश्य क्या है?",
        "options_en": ["Generic slice utilities", "Slice operations", "Extended slice functions", "Experimental slice package"],
        "options_hi": ["जेनरिक स्लाइस यूटिलिटी", "स्लाइस ऑपरेशन", "एक्सटेंडेड स्लाइस फंक्शन", "एक्सपेरिमेंटल स्लाइस पैकेज"],
        "answer_en": "Generic slice utilities",
        "answer_hi": "जेनरिक स्लाइस यूटिलिटी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "How do you use the 'slices.Contains' function?",
        "question_hi": "'slices.Contains' फंक्शन कैसे उपयोग करते हैं?",
        "options_en": ["slices.Contains(slice, value)", "slices.Contains[E comparable](slice []E, value E)", "Contains(slice, value)", "slices.GenericContains(slice, value)"],
        "options_hi": ["slices.Contains(slice, value)", "slices.Contains[E comparable](slice []E, value E)", "Contains(slice, value)", "slices.GenericContains(slice, value)"],
        "answer_en": "slices.Contains(slice, value)",
        "answer_hi": "slices.Contains(slice, value)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "What is the purpose of the 'golang.org/x/exp/maps' package?",
        "question_hi": "'golang.org/x/exp/maps' पैकेज का उद्देश्य क्या है?",
        "options_en": ["Generic map utilities", "Map operations", "Extended map functions", "Experimental map package"],
        "options_hi": ["जेनरिक मैप यूटिलिटी", "मैप ऑपरेशन", "एक्सटेंडेड मैप फंक्शन", "एक्सपेरिमेंटल मैप पैकेज"],
        "answer_en": "Generic map utilities",
        "answer_hi": "जेनरिक मैप यूटिलिटी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "How do you get keys from a generic map?",
        "question_hi": "जेनरिक मैप से की कैसे प्राप्त करते हैं?",
        "options_en": ["maps.Keys(m)", "maps.GetKeys(m)", "Keys(m)", "maps.AllKeys(m)"],
        "options_hi": ["maps.Keys(m)", "maps.GetKeys(m)", "Keys(m)", "maps.AllKeys(m)"],
        "answer_en": "maps.Keys(m)",
        "answer_hi": "maps.Keys(m)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "What is the purpose of type approximation with '~'?",
        "question_hi": "'~' के साथ टाइप एप्रोक्सिमेशन का उद्देश्य क्या है?",
        "options_en": ["Include types with same underlying type", "Type similarity", "Approximate matching", "Type inheritance"],
        "options_hi": ["समान अंडरलाइंग टाइप वाले टाइप शामिल करना", "टाइप समानता", "अनुमानित मैचिंग", "टाइप इनहेरिटेंस"],
        "answer_en": "Include types with same underlying type",
        "answer_hi": "समान अंडरलाइंग टाइप वाले टाइप शामिल करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "How do you create a generic function that works with numbers?",
        "question_hi": "नंबर के साथ काम करने वाला जेनरिक फंक्शन कैसे बनाते हैं?",
        "options_en": ["func Sum[T constraints.Integer | constraints.Float](nums []T) T", "func Sum[T number](nums []T) T", "generic func Sum[T](nums []T) T", "func Sum[T constraints.Numeric](nums []T) T"],
        "options_hi": ["func Sum[T constraints.Integer | constraints.Float](nums []T) T", "func Sum[T number](nums []T) T", "generic func Sum[T](nums []T) T", "func Sum[T constraints.Numeric](nums []T) T"],
        "answer_en": "func Sum[T constraints.Integer | constraints.Float](nums []T) T",
        "answer_hi": "func Sum[T constraints.Integer | constraints.Float](nums []T) T",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "What is the purpose of the 'constraints.Signed' type?",
        "question_hi": "'constraints.Signed' टाइप का उद्देश्य क्या है?",
        "options_en": ["Signed integer types", "Negative numbers", "Integer with sign", "Signed numeric types"],
        "options_hi": ["साइन्ड इंटीजर टाइप", "नेगेटिव नंबर", "साइन के साथ इंटीजर", "साइन्ड न्यूमेरिक टाइप"],
        "answer_en": "Signed integer types",
        "answer_hi": "साइन्ड इंटीजर टाइप",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "How do you handle generic error types?",
        "question_hi": "जेनरिक एरर टाइप कैसे हैंडल करते हैं?",
        "options_en": ["func Handle[T error](err T) error", "func Handle[T any](err T) error", "generic func Handle[T error](err T)", "func Handle[E error](err E) error"],
        "options_hi": ["func Handle[T error](err T) error", "func Handle[T any](err T) error", "generic func Handle[T error](err T)", "func Handle[E error](err E) error"],
        "answer_en": "func Handle[E error](err E) error",
        "answer_hi": "func Handle[E error](err E) error",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "What is the zero value for a generic type parameter T?",
        "question_hi": "जेनरिक टाइप पैरामीटर T के लिए जीरो वैल्यू क्या है?",
        "options_en": ["var zero T", "T{}", "nil", "default(T)"],
        "options_hi": ["var zero T", "T{}", "nil", "default(T)"],
        "answer_en": "var zero T",
        "answer_hi": "var zero T",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "How do you create a generic function that returns a pointer to T?",
        "question_hi": "जेनरिक फंक्शन कैसे बनाते हैं जो T का पॉइंटर रिटर्न करे?",
        "options_en": ["func New[T any](v T) *T", "func New[T](v T) *T", "generic func New[T](v T) *T", "func New[T any](v T) &T"],
        "options_hi": ["func New[T any](v T) *T", "func New[T](v T) *T", "generic func New[T](v T) *T", "func New[T any](v T) &T"],
        "answer_en": "func New[T any](v T) *T",
        "answer_hi": "func New[T any](v T) *T",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "What is the purpose of the 'constraints.Unsigned' type?",
        "question_hi": "'constraints.Unsigned' टाइप का उद्देश्य क्या है?",
        "options_en": ["Unsigned integer types", "Positive numbers", "Integer without sign", "Unsigned numeric types"],
        "options_hi": ["अनसाइन्ड इंटीजर टाइप", "पॉजिटिव नंबर", "साइन के बिना इंटीजर", "अनसाइन्ड न्यूमेरिक टाइप"],
        "answer_en": "Unsigned integer types",
        "answer_hi": "अनसाइन्ड इंटीजर टाइप",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "How do you implement a generic linked list?",
        "question_hi": "जेनरिक लिंक्ड लिस्ट कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["type Node[T any] struct { Value T; Next *Node[T] }", "generic type Node[T] struct { Value T; Next *Node }", "type Node generic[T] struct { Value T; Next *Node[T] }", "struct Node[T] { Value T; Next *Node[T] }"],
        "options_hi": ["type Node[T any] struct { Value T; Next *Node[T] }", "generic type Node[T] struct { Value T; Next *Node }", "type Node generic[T] struct { Value T; Next *Node[T] }", "struct Node[T] { Value T; Next *Node[T] }"],
        "answer_en": "type Node[T any] struct { Value T; Next *Node[T] }",
        "answer_hi": "type Node[T any] struct { Value T; Next *Node[T] }",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "What is the purpose of type parameters in interface methods?",
        "question_hi": "इंटरफेस मेथड में टाइप पैरामीटर का उद्देश्य क्या है?",
        "options_en": ["Generic interface methods", "Type-safe interface methods", "Dynamic interface methods", "Parameterized interface methods"],
        "options_hi": ["जेनरिक इंटरफेस मेथड", "टाइप-सेफ इंटरफेस मेथड", "डायनामिक इंटरफेस मेथड", "पैरामीटराइज्ड इंटरफेस मेथड"],
        "answer_en": "Generic interface methods",
        "answer_hi": "जेनरिक इंटरफेस मेथड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "How do you create a generic function that accepts multiple constraints?",
        "question_hi": "मल्टीपल कंस्ट्रेंट स्वीकार करने वाला जेनरिक फंक्शन कैसे बनाते हैं?",
        "options_en": ["func Process[T interface{ A | B }](v T)", "func Process[T A | B](v T)", "generic func Process[T A, B](v T)", "func Process[T any](v T) where T satisfies A or B"],
        "options_hi": ["func Process[T interface{ A | B }](v T)", "func Process[T A | B](v T)", "generic func Process[T A, B](v T)", "func Process[T any](v T) where T satisfies A or B"],
        "answer_en": "func Process[T interface{ A | B }](v T)",
        "answer_hi": "func Process[T interface{ A | B }](v T)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "What is the purpose of the 'constraints.Complex' type?",
        "question_hi": "'constraints.Complex' टाइप का उद्देश्य क्या है?",
        "options_en": ["Complex number types", "Complex data types", "Complicated types", "Composite types"],
        "options_hi": ["कॉम्प्लेक्स नंबर टाइप", "कॉम्प्लेक्स डेटा टाइप", "कॉम्प्लिकेटेड टाइप", "कम्पोजिट टाइप"],
        "answer_en": "Complex number types",
        "answer_hi": "कॉम्प्लेक्स नंबर टाइप",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "How do you use generics with variadic functions?",
        "question_hi": "वेरिएडिक फंक्शन के साथ जेनरिक्स कैसे उपयोग करते हैं?",
        "options_en": ["func PrintAll[T any](values ...T)", "generic func PrintAll[T](values ...T)", "func PrintAll[...T any](values T)", "func PrintAll[T any](values []T...)"],
        "options_hi": ["func PrintAll[T any](values ...T)", "generic func PrintAll[T](values ...T)", "func PrintAll[...T any](values T)", "func PrintAll[T any](values []T...)"],
        "answer_en": "func PrintAll[T any](values ...T)",
        "answer_hi": "func PrintAll[T any](values ...T)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "What is the purpose of embedded type parameters in structs?",
        "question_hi": "स्ट्रक्चर में एम्बेडेड टाइप पैरामीटर का उद्देश्य क्या है?",
        "options_en": ["Composition with generics", "Inheritance with generics", "Nested generics", "Embedded generic types"],
        "options_hi": ["जेनरिक्स के साथ कम्पोजिशन", "जेनरिक्स के साथ इनहेरिटेंस", "नेस्टेड जेनरिक्स", "एम्बेडेड जेनरिक टाइप"],
        "answer_en": "Composition with generics",
        "answer_hi": "जेनरिक्स के साथ कम्पोजिशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "How do you create a generic function that works with slices and maps?",
        "question_hi": "स्लाइस और मैप के साथ काम करने वाला जेनरिक फंक्शन कैसे बनाते हैं?",
        "options_en": ["func Length[T any](collection []T | map[any]T) int", "func Length[T any](collection interface{}) int", "generic func Length[T](collection []T | map[any]T) int", "func Length(collection any) int"],
        "options_hi": ["func Length[T any](collection []T | map[any]T) int", "func Length[T any](collection interface{}) int", "generic func Length[T](collection []T | map[any]T) int", "func Length(collection any) int"],
        "answer_en": "func Length[T any](collection []T | map[any]T) int",
        "answer_hi": "func Length[T any](collection []T | map[any]T) int",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "What is the purpose of the 'constraints.Boolean' type?",
        "question_hi": "'constraints.Boolean' टाइप का उद्देश्य क्या है?",
        "options_en": ["Boolean type", "True/false types", "Logical types", "Conditional types"],
        "options_hi": ["बूलियन टाइप", "ट्रू/फॉल्स टाइप", "लॉजिकल टाइप", "कंडीशनल टाइप"],
        "answer_en": "Boolean type",
        "answer_hi": "बूलियन टाइप",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "How do you handle generic type conversions?",
        "question_hi": "जेनरिक टाइप कन्वर्जन कैसे हैंडल करते हैं?",
        "options_en": ["Using type assertions", "With conversion functions", "Direct conversion", "Using reflect package"],
        "options_hi": ["टाइप असेर्शन का उपयोग करके", "कन्वर्जन फंक्शन के साथ", "डायरेक्ट कन्वर्जन", "रिफ्लेक्ट पैकेज का उपयोग करके"],
        "answer_en": "With conversion functions",
        "answer_hi": "कन्वर्जन फंक्शन के साथ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "What is the purpose of generic type inference in function calls?",
        "question_hi": "फंक्शन कॉल में जेनरिक टाइप इनफरेंस का उद्देश्य क्या है?",
        "options_en": ["Reduce boilerplate code", "Automatic type detection", "Simplify generic usage", "All of the above"],
        "options_hi": ["बॉयलरप्लेट कोड कम करना", "ऑटोमैटिक टाइप डिटेक्शन", "जेनरिक उपयोग सरल बनाना", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "How do you create a generic function that returns multiple values?",
        "question_hi": "मल्टीपल वैल्यू रिटर्न करने वाला जेनरिक फंक्शन कैसे बनाते हैं?",
        "options_en": ["func Swap[T any](a, b T) (T, T)", "generic func Swap[T](a, b T) (T, T)", "func Swap[T any](a, b T) T, T", "func Swap(a, b any) (any, any)"],
        "options_hi": ["func Swap[T any](a, b T) (T, T)", "generic func Swap[T](a, b T) (T, T)", "func Swap[T any](a, b T) T, T", "func Swap(a, b any) (any, any)"],
        "answer_en": "func Swap[T any](a, b T) (T, T)",
        "answer_hi": "func Swap[T any](a, b T) (T, T)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "What is the purpose of the 'golang.org/x/exp/constraints' package?",
        "question_hi": "'golang.org/x/exp/constraints' पैकेज का उद्देश्य क्या है?",
        "options_en": ["Common type constraints", "Constraint definitions", "Predefined constraints", "All of the above"],
        "options_hi": ["कॉमन टाइप कंस्ट्रेंट", "कंस्ट्रेंट डेफिनिशन", "प्रीडिफाइंड कंस्ट्रेंट", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "How do you implement a generic queue?",
        "question_hi": "जेनरिक क्यू कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["type Queue[T any] struct { elements []T }", "generic type Queue[T] struct { elements []T }", "type Queue generic[T] struct { elements []T }", "struct Queue[T] { elements []T }"],
        "options_hi": ["type Queue[T any] struct { elements []T }", "generic type Queue[T] struct { elements []T }", "type Queue generic[T] struct { elements []T }", "struct Queue[T] { elements []T }"],
        "answer_en": "type Queue[T any] struct { elements []T }",
        "answer_hi": "type Queue[T any] struct { elements []T }",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "What is the purpose of type parameter scoping in Go?",
        "question_hi": "Go में टाइप पैरामीटर स्कोपिंग का उद्देश्य क्या है?",
        "options_en": ["Limit type parameter visibility", "Control type parameter access", "Define where type parameters are available", "All of the above"],
        "options_hi": ["टाइप पैरामीटर विजिबिलिटी लिमिट करना", "टाइप पैरामीटर एक्सेस कंट्रोल करना", "टाइप पैरामीटर उपलब्धता डिफाइन करना", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "How do you create a generic function that works with channels?",
        "question_hi": "चैनल के साथ काम करने वाला जेनरिक फंक्शन कैसे बनाते हैं?",
        "options_en": ["func Send[T any](ch chan T, value T)", "generic func Send[T](ch chan T, value T)", "func Send[T any](ch chan, value T)", "func Send(ch chan any, value any)"],
        "options_hi": ["func Send[T any](ch chan T, value T)", "generic func Send[T](ch chan T, value T)", "func Send[T any](ch chan, value T)", "func Send(ch chan any, value any)"],
        "answer_en": "func Send[T any](ch chan T, value T)",
        "answer_hi": "func Send[T any](ch chan T, value T)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "What is the purpose of generic type constraints with methods?",
        "question_hi": "मेथड के साथ जेनरिक टाइप कंस्ट्रेंट का उद्देश्य क्या है?",
        "options_en": ["Require specific methods", "Method-based constraints", "Interface method requirements", "All of the above"],
        "options_hi": ["स्पेसिफिक मेथड रिक्वायर करना", "मेथड-बेस्ड कंस्ट्रेंट", "इंटरफेस मेथड रिक्वायरमेंट", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "How do you implement a generic heap?",
        "question_hi": "जेनरिक हीप कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["type Heap[T any] struct { data []T; less func(a, b T) bool }", "generic type Heap[T] struct { data []T; less func(a, b T) bool }", "type Heap generic[T] struct { data []T; less func(a, b T) bool }", "struct Heap[T] { data []T; less func(a, b T) bool }"],
        "options_hi": ["type Heap[T any] struct { data []T; less func(a, b T) bool }", "generic type Heap[T] struct { data []T; less func(a, b T) bool }", "type Heap generic[T] struct { data []T; less func(a, b T) bool }", "struct Heap[T] { data []T; less func(a, b T) bool }"],
        "answer_en": "type Heap[T any] struct { data []T; less func(a, b T) bool }",
        "answer_hi": "type Heap[T any] struct { data []T; less func(a, b T) bool }",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "What is the purpose of the 'constraints.Number' type?",
        "question_hi": "'constraints.Number' टाइप का उद्देश्य क्या है?",
        "options_en": ["All numeric types", "Integer and float types", "Numeric constraints", "All of the above"],
        "options_hi": ["सभी न्यूमेरिक टाइप", "इंटीजर और फ्लोट टाइप", "न्यूमेरिक कंस्ट्रेंट", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "How do you create a generic function that handles errors?",
        "question_hi": "एरर हैंडल करने वाला जेनरिक फंक्शन कैसे बनाते हैं?",
        "options_en": ["func HandleError[T any](fn func() (T, error)) (T, error)", "generic func HandleError[T](fn func() (T, error)) (T, error)", "func HandleError(fn func() (any, error)) (any, error)", "func HandleError[T any](fn func() T) (T, error)"],
        "options_hi": ["func HandleError[T any](fn func() (T, error)) (T, error)", "generic func HandleError[T](fn func() (T, error)) (T, error)", "func HandleError(fn func() (any, error)) (any, error)", "func HandleError[T any](fn func() T) (T, error)"],
        "answer_en": "func HandleError[T any](fn func() (T, error)) (T, error)",
        "answer_hi": "func HandleError[T any](fn func() (T, error)) (T, error)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "What is the purpose of generic type aliases?",
        "question_hi": "जेनरिक टाइप एलियस का उद्देश्य क्या है?",
        "options_en": ["Simplify complex generic types", "Create reusable type definitions", "Improve code readability", "All of the above"],
        "options_hi": ["कॉम्प्लेक्स जेनरिक टाइप सरल बनाना", "रीयूजेबल टाइप डेफिनिशन बनाना", "कोड रीडेबिलिटी इम्प्रूव करना", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "How do you implement a generic cache?",
        "question_hi": "जेनरिक कैश कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["type Cache[K comparable, V any] struct { data map[K]V }", "generic type Cache[K, V] struct { data map[K]V }", "type Cache generic[K, V] struct { data map[K]V }", "struct Cache[K, V] { data map[K]V }"],
        "options_hi": ["type Cache[K comparable, V any] struct { data map[K]V }", "generic type Cache[K, V] struct { data map[K]V }", "type Cache generic[K, V] struct { data map[K]V }", "struct Cache[K, V] { data map[K]V }"],
        "answer_en": "type Cache[K comparable, V any] struct { data map[K]V }",
        "answer_hi": "type Cache[K comparable, V any] struct { data map[K]V }",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "What is the purpose of the 'constraints.String' type?",
        "question_hi": "'constraints.String' टाइप का उद्देश्य क्या है?",
        "options_en": ["String type constraint", "For string operations", "String compatible types", "All of the above"],
        "options_hi": ["स्ट्रिंग टाइप कंस्ट्रेंट", "स्ट्रिंग ऑपरेशन के लिए", "स्ट्रिंग कम्पेटिबल टाइप", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "How do you create a generic function that works with pointers?",
        "question_hi": "पॉइंटर के साथ काम करने वाला जेनरिक फंक्शन कैसे बनाते हैं?",
        "options_en": ["func Dereference[T any](ptr *T) T", "generic func Dereference[T](ptr *T) T", "func Dereference[T any](ptr *T) T { return *ptr }", "func Dereference(ptr any) any"],
        "options_hi": ["func Dereference[T any](ptr *T) T", "generic func Dereference[T](ptr *T) T", "func Dereference[T any](ptr *T) T { return *ptr }", "func Dereference(ptr any) any"],
        "answer_en": "func Dereference[T any](ptr *T) T",
        "answer_hi": "func Dereference[T any](ptr *T) T",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "What is the purpose of generic type constraints with struct fields?",
        "question_hi": "स्ट्रक्चर फील्ड के साथ जेनरिक टाइप कंस्ट्रेंट का उद्देश्य क्या है?",
        "options_en": ["Type-safe struct fields", "Constraint struct field types", "Ensure field type compatibility", "All of the above"],
        "options_hi": ["टाइप-सेफ स्ट्रक्चर फील्ड", "कंस्ट्रेंट स्ट्रक्चर फील्ड टाइप", "फील्ड टाइप कम्पेटिबिलिटी सुनिश्चित करना", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "How do you implement a generic set?",
        "question_hi": "जेनरिक सेट कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["type Set[T comparable] map[T]bool", "generic type Set[T] map[T]bool", "type Set generic[T] map[T]bool", "struct Set[T] map[T]bool"],
        "options_hi": ["type Set[T comparable] map[T]bool", "generic type Set[T] map[T]bool", "type Set generic[T] map[T]bool", "struct Set[T] map[T]bool"],
        "answer_en": "type Set[T comparable] map[T]bool",
        "answer_hi": "type Set[T comparable] map[T]bool",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "What is the purpose of the 'constraints.Rune' type?",
        "question_hi": "'constraints.Rune' टाइप का उद्देश्य क्या है?",
        "options_en": ["Rune type constraint", "For character operations", "Rune compatible types", "All of the above"],
        "options_hi": ["रून टाइप कंस्ट्रेंट", "कैरेक्टर ऑपरेशन के लिए", "रून कम्पेटिबल टाइप", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "How do you create a generic function that works with interfaces?",
        "question_hi": "इंटरफेस के साथ काम करने वाला जेनरिक फंक्शन कैसे बनाते हैं?",
        "options_en": ["func ProcessInterface[T any](v T) where T satisfies some interface", "func ProcessInterface[T interface{ Method() }](v T)", "generic func ProcessInterface[T](v T) where T has method", "func ProcessInterface(v any)"],
        "options_hi": ["func ProcessInterface[T any](v T) where T satisfies some interface", "func ProcessInterface[T interface{ Method() }](v T)", "generic func ProcessInterface[T](v T) where T has method", "func ProcessInterface(v any)"],
        "answer_en": "func ProcessInterface[T interface{ Method() }](v T)",
        "answer_hi": "func ProcessInterface[T interface{ Method() }](v T)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "What is the purpose of generic type constraints with channel operations?",
        "question_hi": "चैनल ऑपरेशन के साथ जेनरिक टाइप कंस्ट्रेंट का उद्देश्य क्या है?",
        "options_en": ["Type-safe channel operations", "Constraint channel types", "Ensure channel type compatibility", "All of the above"],
        "options_hi": ["टाइप-सेफ चैनल ऑपरेशन", "कंस्ट्रेंट चैनल टाइप", "चैनल टाइप कम्पेटिबिलिटी सुनिश्चित करना", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "How do you implement a generic priority queue?",
        "question_hi": "जेनरिक प्रायोरिटी क्यू कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["type PriorityQueue[T any] struct { data []T; less func(a, b T) bool }", "generic type PriorityQueue[T] struct { data []T; less func(a, b T) bool }", "type PriorityQueue generic[T] struct { data []T; less func(a, b T) bool }", "struct PriorityQueue[T] { data []T; less func(a, b T) bool }"],
        "options_hi": ["type PriorityQueue[T any] struct { data []T; less func(a, b T) bool }", "generic type PriorityQueue[T] struct { data []T; less func(a, b T) bool }", "type PriorityQueue generic[T] struct { data []T; less func(a, b T) bool }", "struct PriorityQueue[T] { data []T; less func(a, b T) bool }"],
        "answer_en": "type PriorityQueue[T any] struct { data []T; less func(a, b T) bool }",
        "answer_hi": "type PriorityQueue[T any] struct { data []T; less func(a, b T) bool }",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "What is the purpose of the 'constraints.Byte' type?",
        "question_hi": "'constraints.Byte' टाइप का उद्देश्य क्या है?",
        "options_en": ["Byte type constraint", "For byte operations", "Byte compatible types", "All of the above"],
        "options_hi": ["बाइट टाइप कंस्ट्रेंट", "बाइट ऑपरेशन के लिए", "बाइट कम्पेटिबल टाइप", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "How do you create a generic function that handles context?",
        "question_hi": "कॉन्टेक्स्ट हैंडल करने वाला जेनरिक फंक्शन कैसे बनाते हैं?",
        "options_en": ["func WithContext[T any](ctx context.Context, fn func(context.Context) T) (T, error)", "generic func WithContext[T](ctx context.Context, fn func(context.Context) T) (T, error)", "func WithContext(ctx context.Context, fn func(context.Context) any) (any, error)", "func WithContext[T any](ctx context.Context, fn func() T) (T, error)"],
        "options_hi": ["func WithContext[T any](ctx context.Context, fn func(context.Context) T) (T, error)", "generic func WithContext[T](ctx context.Context, fn func(context.Context) T) (T, error)", "func WithContext(ctx context.Context, fn func(context.Context) any) (any, error)", "func WithContext[T any](ctx context.Context, fn func() T) (T, error)"],
        "answer_en": "func WithContext[T any](ctx context.Context, fn func(context.Context) T) (T, error)",
        "answer_hi": "func WithContext[T any](ctx context.Context, fn func(context.Context) T) (T, error)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "What is the purpose of generic type constraints with slice operations?",
        "question_hi": "स्लाइस ऑपरेशन के साथ जेनरिक टाइप कंस्ट्रेंट का उद्देश्य क्या है?",
        "options_en": ["Type-safe slice operations", "Constraint slice element types", "Ensure slice type compatibility", "All of the above"],
        "options_hi": ["टाइप-सेफ स्लाइस ऑपरेशन", "कंस्ट्रेंट स्लाइस एलिमेंट टाइप", "स्लाइस टाइप कम्पेटिबिलिटी सुनिश्चित करना", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "How do you implement a generic graph?",
        "question_hi": "जेनरिक ग्राफ कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["type Graph[T comparable] struct { nodes map[T][]T }", "generic type Graph[T] struct { nodes map[T][]T }", "type Graph generic[T] struct { nodes map[T][]T }", "struct Graph[T] { nodes map[T][]T }"],
        "options_hi": ["type Graph[T comparable] struct { nodes map[T][]T }", "generic type Graph[T] struct { nodes map[T][]T }", "type Graph generic[T] struct { nodes map[T][]T }", "struct Graph[T] { nodes map[T][]T }"],
        "answer_en": "type Graph[T comparable] struct { nodes map[T][]T }",
        "answer_hi": "type Graph[T comparable] struct { nodes map[T][]T }",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "What is the purpose of the 'constraints.Uintptr' type?",
        "question_hi": "'constraints.Uintptr' टाइप का उद्देश्य क्या है?",
        "options_en": ["Uintptr type constraint", "For pointer operations", "Uintptr compatible types", "All of the above"],
        "options_hi": ["Uintptr टाइप कंस्ट्रेंट", "पॉइंटर ऑपरेशन के लिए", "Uintptr कम्पेटिबल टाइप", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "How do you create a generic function that works with time?",
        "question_hi": "टाइम के साथ काम करने वाला जेनरिक फंक्शन कैसे बनाते हैं?",
        "options_en": ["func MeasureTime[T any](fn func() T) (T, time.Duration)", "generic func MeasureTime[T](fn func() T) (T, time.Duration)", "func MeasureTime(fn func() any) (any, time.Duration)", "func MeasureTime[T any](fn func() T) time.Duration"],
        "options_hi": ["func MeasureTime[T any](fn func() T) (T, time.Duration)", "generic func MeasureTime[T](fn func() T) (T, time.Duration)", "func MeasureTime(fn func() any) (any, time.Duration)", "func MeasureTime[T any](fn func() T) time.Duration"],
        "answer_en": "func MeasureTime[T any](fn func() T) (T, time.Duration)",
        "answer_hi": "func MeasureTime[T any](fn func() T) (T, time.Duration)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "What is the purpose of generic type constraints with map operations?",
        "question_hi": "मैप ऑपरेशन के साथ जेनरिक टाइप कंस्ट्रेंट का उद्देश्य क्या है?",
        "options_en": ["Type-safe map operations", "Constraint map key and value types", "Ensure map type compatibility", "All of the above"],
        "options_hi": ["टाइप-सेफ मैप ऑपरेशन", "कंस्ट्रेंट मैप की और वैल्यू टाइप", "मैप टाइप कम्पेटिबिलिटी सुनिश्चित करना", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "How do you implement a generic trie?",
        "question_hi": "जेनरिक ट्राई कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["type Trie[T any] struct { children map[rune]*Trie[T]; value *T }", "generic type Trie[T] struct { children map[rune]*Trie[T]; value *T }", "type Trie generic[T] struct { children map[rune]*Trie[T]; value *T }", "struct Trie[T] { children map[rune]*Trie[T]; value *T }"],
        "options_hi": ["type Trie[T any] struct { children map[rune]*Trie[T]; value *T }", "generic type Trie[T] struct { children map[rune]*Trie[T]; value *T }", "type Trie generic[T] struct { children map[rune]*Trie[T]; value *T }", "struct Trie[T] { children map[rune]*Trie[T]; value *T }"],
        "answer_en": "type Trie[T any] struct { children map[rune]*Trie[T]; value *T }",
        "answer_hi": "type Trie[T any] struct { children map[rune]*Trie[T]; value *T }",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "What is the purpose of the 'constraints.Float' type?",
        "question_hi": "'constraints.Float' टाइप का उद्देश्य क्या है?",
        "options_en": ["Float type constraint", "For floating-point operations", "Float compatible types", "All of the above"],
        "options_hi": ["फ्लोट टाइप कंस्ट्रेंट", "फ्लोटिंग-पॉइंट ऑपरेशन के लिए", "फ्लोट कम्पेटिबल टाइप", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "How do you create a generic function that handles panics?",
        "question_hi": "पैनिक हैंडल करने वाला जेनरिक फंक्शन कैसे बनाते हैं?",
        "options_en": ["func Recover[T any](fn func() T) (result T, err error)", "generic func Recover[T](fn func() T) (result T, err error)", "func Recover(fn func() any) (any, error)", "func Recover[T any](fn func() T) T"],
        "options_hi": ["func Recover[T any](fn func() T) (result T, err error)", "generic func Recover[T](fn func() T) (result T, err error)", "func Recover(fn func() any) (any, error)", "func Recover[T any](fn func() T) T"],
        "answer_en": "func Recover[T any](fn func() T) (result T, err error)",
        "answer_hi": "func Recover[T any](fn func() T) (result T, err error)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "What is the purpose of generic type constraints with JSON operations?",
        "question_hi": "JSON ऑपरेशन के साथ जेनरिक टाइप कंस्ट्रेंट का उद्देश्य क्या है?",
        "options_en": ["Type-safe JSON operations", "Constraint JSON serializable types", "Ensure JSON compatibility", "All of the above"],
        "options_hi": ["टाइप-सेफ JSON ऑपरेशन", "कंस्ट्रेंट JSON सीरियलाइजेबल टाइप", "JSON कम्पेटिबिलिटी सुनिश्चित करना", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "How do you implement a generic bloom filter?",
        "question_hi": "जेनरिक ब्लूम फिल्टर कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["type BloomFilter[T comparable] struct { bits []bool; hashes []func(T) uint }", "generic type BloomFilter[T] struct { bits []bool; hashes []func(T) uint }", "type BloomFilter generic[T] struct { bits []bool; hashes []func(T) uint }", "struct BloomFilter[T] { bits []bool; hashes []func(T) uint }"],
        "options_hi": ["type BloomFilter[T comparable] struct { bits []bool; hashes []func(T) uint }", "generic type BloomFilter[T] struct { bits []bool; hashes []func(T) uint }", "type BloomFilter generic[T] struct { bits []bool; hashes []func(T) uint }", "struct BloomFilter[T] { bits []bool; hashes []func(T) uint }"],
        "answer_en": "type BloomFilter[T comparable] struct { bits []bool; hashes []func(T) uint }",
        "answer_hi": "type BloomFilter[T comparable] struct { bits []bool; hashes []func(T) uint }",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "What is the purpose of the 'constraints.Integer' type?",
        "question_hi": "'constraints.Integer' टाइप का उद्देश्य क्या है?",
        "options_en": ["Integer type constraint", "For integer operations", "Integer compatible types", "All of the above"],
        "options_hi": ["इंटीजर टाइप कंस्ट्रेंट", "इंटीजर ऑपरेशन के लिए", "इंटीजर कम्पेटिबल टाइप", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "How do you create a generic function that works with HTTP handlers?",
        "question_hi": "HTTP हैंडलर के साथ काम करने वाला जेनरिक फंक्शन कैसे बनाते हैं?",
        "options_en": ["func Handler[T any](fn func(http.ResponseWriter, *http.Request) T) http.HandlerFunc", "generic func Handler[T](fn func(http.ResponseWriter, *http.Request) T) http.HandlerFunc", "func Handler(fn func(http.ResponseWriter, *http.Request) any) http.HandlerFunc", "func Handler[T any](fn func() T) http.HandlerFunc"],
        "options_hi": ["func Handler[T any](fn func(http.ResponseWriter, *http.Request) T) http.HandlerFunc", "generic func Handler[T](fn func(http.ResponseWriter, *http.Request) T) http.HandlerFunc", "func Handler(fn func(http.ResponseWriter, *http.Request) any) http.HandlerFunc", "func Handler[T any](fn func() T) http.HandlerFunc"],
        "answer_en": "func Handler[T any](fn func(http.ResponseWriter, *http.Request) T) http.HandlerFunc",
        "answer_hi": "func Handler[T any](fn func(http.ResponseWriter, *http.Request) T) http.HandlerFunc",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "What is the purpose of generic type constraints with database operations?",
        "question_hi": "डेटाबेस ऑपरेशन के साथ जेनरिक टाइप कंस्ट्रेंट का उद्देश्य क्या है?",
        "options_en": ["Type-safe database operations", "Constraint database model types", "Ensure database compatibility", "All of the above"],
        "options_hi": ["टाइप-सेफ डेटाबेस ऑपरेशन", "कंस्ट्रेंट डेटाबेस मॉडल टाइप", "डेटाबेस कम्पेटिबिलिटी सुनिश्चित करना", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "How do you implement a generic LRU cache?",
        "question_hi": "जेनरिक LRU कैश कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["type LRUCache[K comparable, V any] struct { capacity int; cache map[K]*list.Element; list *list.List }", "generic type LRUCache[K, V] struct { capacity int; cache map[K]*list.Element; list *list.List }", "type LRUCache generic[K, V] struct { capacity int; cache map[K]*list.Element; list *list.List }", "struct LRUCache[K, V] { capacity int; cache map[K]*list.Element; list *list.List }"],
        "options_hi": ["type LRUCache[K comparable, V any] struct { capacity int; cache map[K]*list.Element; list *list.List }", "generic type LRUCache[K, V] struct { capacity int; cache map[K]*list.Element; list *list.List }", "type LRUCache generic[K, V] struct { capacity int; cache map[K]*list.Element; list *list.List }", "struct LRUCache[K, V] { capacity int; cache map[K]*list.Element; list *list.List }"],
        "answer_en": "type LRUCache[K comparable, V any] struct { capacity int; cache map[K]*list.Element; list *list.List }",
        "answer_hi": "type LRUCache[K comparable, V any] struct { capacity int; cache map[K]*list.Element; list *list.List }",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "What is the purpose of the 'constraints.Complex64' type?",
        "question_hi": "'constraints.Complex64' टाइप का उद्देश्य क्या है?",
        "options_en": ["Complex64 type constraint", "For complex64 operations", "Complex64 compatible types", "All of the above"],
        "options_hi": ["Complex64 टाइप कंस्ट्रेंट", "complex64 ऑपरेशन के लिए", "Complex64 कम्पेटिबल टाइप", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "How do you create a generic function that works with goroutines?",
        "question_hi": "गोरूटीन के साथ काम करने वाला जेनरिक फंक्शन कैसे बनाते हैं?",
        "options_en": ["func Go[T any](fn func() T) chan T", "generic func Go[T](fn func() T) chan T", "func Go(fn func() any) chan any", "func Go[T any](fn func() T) T"],
        "options_hi": ["func Go[T any](fn func() T) chan T", "generic func Go[T](fn func() T) chan T", "func Go(fn func() any) chan any", "func Go[T any](fn func() T) T"],
        "answer_en": "func Go[T any](fn func() T) chan T",
        "answer_hi": "func Go[T any](fn func() T) chan T",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "What is the purpose of generic type constraints with file operations?",
        "question_hi": "फाइल ऑपरेशन के साथ जेनरिक टाइप कंस्ट्रेंट का उद्देश्य क्या है?",
        "options_en": ["Type-safe file operations", "Constraint file content types", "Ensure file compatibility", "All of the above"],
        "options_hi": ["टाइप-सेफ फाइल ऑपरेशन", "कंस्ट्रेंट फाइल कंटेंट टाइप", "फाइल कम्पेटिबिलिटी सुनिश्चित करना", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "How do you implement a generic ring buffer?",
        "question_hi": "जेनरिक रिंग बफर कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["type RingBuffer[T any] struct { buffer []T; size, start, end int }", "generic type RingBuffer[T] struct { buffer []T; size, start, end int }", "type RingBuffer generic[T] struct { buffer []T; size, start, end int }", "struct RingBuffer[T] { buffer []T; size, start, end int }"],
        "options_hi": ["type RingBuffer[T any] struct { buffer []T; size, start, end int }", "generic type RingBuffer[T] struct { buffer []T; size, start, end int }", "type RingBuffer generic[T] struct { buffer []T; size, start, end int }", "struct RingBuffer[T] { buffer []T; size, start, end int }"],
        "answer_en": "type RingBuffer[T any] struct { buffer []T; size, start, end int }",
        "answer_hi": "type RingBuffer[T any] struct { buffer []T; size, start, end int }",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "What is the purpose of the 'constraints.Complex128' type?",
        "question_hi": "'constraints.Complex128' टाइप का उद्देश्य क्या है?",
        "options_en": ["Complex128 type constraint", "For complex128 operations", "Complex128 compatible types", "All of the above"],
        "options_hi": ["Complex128 टाइप कंस्ट्रेंट", "complex128 ऑपरेशन के लिए", "Complex128 कम्पेटिबल टाइप", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "How do you create a generic function that works with sorting?",
        "question_hi": "सॉर्टिंग के साथ काम करने वाला जेनरिक फंक्शन कैसे बनाते हैं?",
        "options_en": ["func Sort[T constraints.Ordered](slice []T)", "generic func Sort[T](slice []T)", "func Sort(slice []any)", "func Sort[T any](slice []T)"],
        "options_hi": ["func Sort[T constraints.Ordered](slice []T)", "generic func Sort[T](slice []T)", "func Sort(slice []any)", "func Sort[T any](slice []T)"],
        "answer_en": "func Sort[T constraints.Ordered](slice []T)",
        "answer_hi": "func Sort[T constraints.Ordered](slice []T)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "What is the purpose of generic type constraints with network operations?",
        "question_hi": "नेटवर्क ऑपरेशन के साथ जेनरिक टाइप कंस्ट्रेंट का उद्देश्य क्या है?",
        "options_en": ["Type-safe network operations", "Constraint network message types", "Ensure network compatibility", "All of the above"],
        "options_hi": ["टाइप-सेफ नेटवर्क ऑपरेशन", "कंस्ट्रेंट नेटवर्क मैसेज टाइप", "नेटवर्क कम्पेटिबिलिटी सुनिश्चित करना", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "How do you implement a generic skip list?",
        "question_hi": "जेनरिक स्किप लिस्ट कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["type SkipList[K constraints.Ordered, V any] struct { head *skipListNode[K, V]; level int }", "generic type SkipList[K, V] struct { head *skipListNode[K, V]; level int }", "type SkipList generic[K, V] struct { head *skipListNode[K, V]; level int }", "struct SkipList[K, V] { head *skipListNode[K, V]; level int }"],
        "options_hi": ["type SkipList[K constraints.Ordered, V any] struct { head *skipListNode[K, V]; level int }", "generic type SkipList[K, V] struct { head *skipListNode[K, V]; level int }", "type SkipList generic[K, V] struct { head *skipListNode[K, V]; level int }", "struct SkipList[K, V] { head *skipListNode[K, V]; level int }"],
        "answer_en": "type SkipList[K constraints.Ordered, V any] struct { head *skipListNode[K, V]; level int }",
        "answer_hi": "type SkipList[K constraints.Ordered, V any] struct { head *skipListNode[K, V]; level int }",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "What is the purpose of the 'constraints.Uint' type?",
        "question_hi": "'constraints.Uint' टाइप का उद्देश्य क्या है?",
        "options_en": ["Uint type constraint", "For uint operations", "Uint compatible types", "All of the above"],
        "options_hi": ["Uint टाइप कंस्ट्रेंट", "uint ऑपरेशन के लिए", "Uint कम्पेटिबल टाइप", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "How do you create a generic function that works with encryption?",
        "question_hi": "एन्क्रिप्शन के साथ काम करने वाला जेनरिक फंक्शन कैसे बनाते हैं?",
        "options_en": ["func Encrypt[T []byte | string](data T) (T, error)", "generic func Encrypt[T](data T) (T, error)", "func Encrypt(data any) (any, error)", "func Encrypt[T any](data T) (T, error)"],
        "options_hi": ["func Encrypt[T []byte | string](data T) (T, error)", "generic func Encrypt[T](data T) (T, error)", "func Encrypt(data any) (any, error)", "func Encrypt[T any](data T) (T, error)"],
        "answer_en": "func Encrypt[T []byte | string](data T) (T, error)",
        "answer_hi": "func Encrypt[T []byte | string](data T) (T, error)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "What is the purpose of generic type constraints with compression?",
        "question_hi": "कम्प्रेशन के साथ जेनरिक टाइप कंस्ट्रेंट का उद्देश्य क्या है?",
        "options_en": ["Type-safe compression operations", "Constraint compressible data types", "Ensure compression compatibility", "All of the above"],
        "options_hi": ["टाइप-सेफ कम्प्रेशन ऑपरेशन", "कंस्ट्रेंट कम्प्रेसिबल डेटा टाइप", "कम्प्रेशन कम्पेटिबिलिटी सुनिश्चित करना", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "How do you implement a generic B-tree?",
        "question_hi": "जेनरिक B-ट्री कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["type BTree[K constraints.Ordered, V any] struct { root *bTreeNode[K, V]; degree int }", "generic type BTree[K, V] struct { root *bTreeNode[K, V]; degree int }", "type BTree generic[K, V] struct { root *bTreeNode[K, V]; degree int }", "struct BTree[K, V] { root *bTreeNode[K, V]; degree int }"],
        "options_hi": ["type BTree[K constraints.Ordered, V any] struct { root *bTreeNode[K, V]; degree int }", "generic type BTree[K, V] struct { root *bTreeNode[K, V]; degree int }", "type BTree generic[K, V] struct { root *bTreeNode[K, V]; degree int }", "struct BTree[K, V] { root *bTreeNode[K, V]; degree int }"],
        "answer_en": "type BTree[K constraints.Ordered, V any] struct { root *bTreeNode[K, V]; degree int }",
        "answer_hi": "type BTree[K constraints.Ordered, V any] struct { root *bTreeNode[K, V]; degree int }",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "What is the purpose of the 'constraints.Int' type?",
        "question_hi": "'constraints.Int' टाइप का उद्देश्य क्या है?",
        "options_en": ["Int type constraint", "For int operations", "Int compatible types", "All of the above"],
        "options_hi": ["Int टाइप कंस्ट्रेंट", "int ऑपरेशन के लिए", "Int कम्पेटिबल टाइप", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "How do you create a generic function that works with reflection?",
        "question_hi": "रिफ्लेक्शन के साथ काम करने वाला जेनरिक फंक्शन कैसे बनाते हैं?",
        "options_en": ["func Reflect[T any](v T) reflect.Type", "generic func Reflect[T](v T) reflect.Type", "func Reflect(v any) reflect.Type", "func Reflect[T any]() reflect.Type"],
        "options_hi": ["func Reflect[T any](v T) reflect.Type", "generic func Reflect[T](v T) reflect.Type", "func Reflect(v any) reflect.Type", "func Reflect[T any]() reflect.Type"],
        "answer_en": "func Reflect[T any](v T) reflect.Type",
        "answer_hi": "func Reflect[T any](v T) reflect.Type",
        "attempted": false,
        "selected": ""
    }
]
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