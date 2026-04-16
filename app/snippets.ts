export interface SnippetSection {
  title: string;
  code: string;
}

export interface Snippet {
  id: string;
  title: string;
  description: string;
  language: string;
  code: string;
  sections?: SnippetSection[];
  tags: string[];
}

export const snippets: Snippet[] = [
  {
    id: "prac-1",
    title: "Prac 1 ( Preprocessing)",
    description: "Preprocessing of text: Word Analysis (Tokenization, Filtration, word frequency, Stop Word Removal)",
    language: "python",
    tags: ["nltk", "nlp", "preprocessing", "tokenization"],
    code: `import nltk
nltk.download('punkt')
nltk.download('punkt_tab')
nltk.download('stopwords')


from nltk.tokenize import sent_tokenize

text = """Hello Mr. Smith, how are you doing today? The weather is great, and city is awesome.
The sky is pinkish-blue. You shouldn't eat cardboard"""

tokenized_text = sent_tokenize(text)
print("Sentence Tokenized Text:", tokenized_text)


from nltk.tokenize import word_tokenize

tokenized_word = word_tokenize(text)
print("Word Tokenized:", tokenized_word)


from nltk.probability import FreqDist

fdist = FreqDist(tokenized_word)
print("Frequency Distribution:", fdist)


import matplotlib.pyplot as plt

fdist.plot(30, cumulative=False)
plt.show()


from nltk.corpus import stopwords

stop_words = set(stopwords.words("english"))

filtered_sent = []
for w in tokenized_word:
    if w.lower() not in stop_words:
        filtered_sent.append(w)

print("Tokenized Word:", tokenized_word)
print("Filtered Word:", filtered_sent)`,
  },
  {
    id: "prac-2",
    title: "Prac 2 (Regex Regular Expressions)",
    description: "Create Regular expressions in Python for detecting word patterns and tokenizing text.",
    language: "python",
    tags: ["regex", "python", "tokenization", "text-processing"],
    code: `import re

text = "Hello, my name is John Doe! I am learning Python, and it's fun 2 much."

word_pattern = r'\\b\\w+\\b'
words = re.findall(word_pattern, text)
print("Words:", words)

pattern_start_with_p = r'\\bP\\w*\\b'
p_words = re.findall(pattern_start_with_p, text)
print("Words starting with 'P':", p_words)

tokens = re.split(r'(\\W+)', text)
print("Tokens:", [token.strip() for token in tokens if token.strip()]) 

number_pattern = r'\\b\\d+\\b'
numbers = re.findall(number_pattern, text)
print("Numbers:", numbers)


text_data = """101   COM   Computers
205   MAT   Mathematics
189   ENG    English"""

print("Numbers found:", re.findall('[0-9]+', text_data))
print("Course codes:", re.findall('[A-Z]{3}', text_data))
print("Names:", re.findall('[A-Za-z]{4,}', text_data))


course_pattern = r'([0-9]+)\\s*([A-Z]{3})\\s*([A-Za-z]{4,})'
print("Grouped courses:", re.findall(course_pattern, text_data))

print("Quantifiers match:", re.findall(r'Co+l', 'So Cooool Coool cool coool col'))
print("Boundary match:", re.findall(r'\\btoy\\b', 'play toy broke toys'))


emails = """zuck26@facebook.com
page33@google.com
jeff42@amazon.com"""
email_pattern = r'(\\w+)@([A-Z0-9]+)\\.([A-Z]{2,4})'
print("Emails found:", re.findall(email_pattern, emails, flags=re.IGNORECASE))


tweet = '''Good advice! RT @TheNextWeb: What I would do differently if I was learning to code today http://t.co/lbwej0pxOd cc: @garybernhardt #rstats'''

def clean_tweet(tweet):
    tweet = re.sub(r'http\\S+\\s*', '', tweet)  
    tweet = re.sub(r'RT|cc', '', tweet)  
    tweet = re.sub(r'#\\S+', '', tweet)  
    tweet = re.sub(r'@\\S+', '', tweet)  
    tweet = re.sub(r'[%s]' % re.escape(r"""!"#$%&'()*+,-./:;<=>?@[\\]^_~\`{|}~"""), '', tweet)  
    tweet = re.sub(r'\\s+', ' ', tweet)  
    return tweet

print("Cleaned Tweet:", clean_tweet(tweet))`,
  },
  {
    id: "prac-3",
    title: "Prac 3 (Stemming, Lemmatization & Morphology)",
    description: "Perform Stemming and Lemmatization on words and analyze morphological structures.",
    language: "python",
    tags: ["nltk", "stemming", "lemmatization", "morphology"],
    code: `import nltk
nltk.download('wordnet')
nltk.download('punkt_tab')
from nltk.stem import PorterStemmer

stemmer = PorterStemmer()
words = ["running", "runner", "runs", "easily", "happier", "better"]
stemmed_words = [stemmer.stem(word) for word in words]
print("Stemmed:", stemmed_words)

from nltk.stem import WordNetLemmatizer
from nltk.corpus import wordnet
lemmatizer = WordNetLemmatizer()
lemmatized_words = [lemmatizer.lemmatize(word, pos=wordnet.VERB) for word in words]
print("Lemmatized (Verb):", lemmatized_words)`,
    sections: [
      {
        title: "Stemming & Lemmatization",
        code: `import nltk
nltk.download('wordnet')
nltk.download('punkt_tab')
from nltk.stem import PorterStemmer

stemmer = PorterStemmer()
words = ["running", "runner", "runs", "easily", "happier", "better"]
stemmed_words = [stemmer.stem(word) for word in words]
print("Stemmed:", stemmed_words)

from nltk.stem import WordNetLemmatizer
from nltk.corpus import wordnet
lemmatizer = WordNetLemmatizer()
lemmatized_words = [lemmatizer.lemmatize(word, pos=wordnet.VERB) for word in words]
print("Lemmatized (Verb):", lemmatized_words)`,
      },
      {
        title: "Morphology",
        code: `import nltk
from nltk.tag import RegexpTagger
from nltk.tokenize import word_tokenize
from nltk.corpus import wordnet
import re
import spacy

sentence = "The cats were running quickly."
tokens = word_tokenize(sentence)
patterns = [
    (r'.*ing$', 'VB'),
    (r'.*ly$', 'RB'),
    (r'.*es$', 'NNS'),
]
tagger = RegexpTagger(patterns)
print("Tagged Tokens:", tagger.tag(tokens))

nltk.download('wordnet')
synsets = wordnet.synsets('running')
if synsets:
    print("Lemmas:", synsets[0].lemmas())

def extract_suffixes(word):
    suffixes = ['ing', 'ed', 'ly', 's']
    for suffix in suffixes:
        if word.endswith(suffix):
            return suffix
    return None

words = ["running", "played", "happily", "cats", "jump"]
print("Extracted Suffixes:", [extract_suffixes(w) for w in words])

compound_words = ['sunflower', 'basketball', 'football', 'notebook', 'toothbrush']
common_words = ['sun', 'flower', 'basket', 'ball', 'foot', 'book', 'tooth', 'brush']

def split_compound_word(word, components):
    for component in components:
        if word.startswith(component):
            remaining = word[len(component):]
            if remaining in components:
                return component, remaining
    return word

print("Split Compounds:", {w: split_compound_word(w, common_words) for w in compound_words})

try:
    nlp = spacy.load("en_core_web_sm")
    doc = nlp("The football players were practicing on the basketball court.")
    for token in doc:
        if token.dep_ == "compound":
            print(f"Compound word found: {token.text} -> Head: {token.head.text}")
except:
    print("Spacy model 'en_core_web_sm' not found.")`,
      },
      {
        title: "Stem, Lem & Morph",
        code: `import nltk
from nltk.stem import PorterStemmer, WordNetLemmatizer
from nltk.corpus import wordnet
from nltk.tag import RegexpTagger
from nltk.tokenize import word_tokenize
import re
import spacy

# --- STEMMING & LEMMATIZATION ---
nltk.download('wordnet')
nltk.download('punkt_tab')

stemmer = PorterStemmer()
words = ["running", "runner", "runs", "easily", "happier", "better"]
stemmed_words = [stemmer.stem(word) for word in words]
print("Stemmed:", stemmed_words)

lemmatizer = WordNetLemmatizer()
lemmatized_words = [lemmatizer.lemmatize(word, pos=wordnet.VERB) for word in words]
print("Lemmatized (Verb):", lemmatized_words)

# --- MORPHOLOGY ---
sentence = "The cats were running quickly."
tokens = word_tokenize(sentence)
patterns = [
    (r'.*ing$', 'VB'),
    (r'.*ly$', 'RB'),
    (r'.*es$', 'NNS'),
]
tagger = RegexpTagger(patterns)
print("\\nTagged Tokens:", tagger.tag(tokens))

synsets = wordnet.synsets('running')
if synsets:
    print("Lemmas:", synsets[0].lemmas())

def extract_suffixes(word):
    suffixes = ['ing', 'ed', 'ly', 's']
    for suffix in suffixes:
        if word.endswith(suffix):
            return suffix
    return None

test_words = ["running", "played", "happily", "cats", "jump"]
print("Extracted Suffixes:", [extract_suffixes(w) for w in test_words])

compound_words = ['sunflower', 'basketball', 'football', 'notebook', 'toothbrush']
common_words = ['sun', 'flower', 'basket', 'ball', 'foot', 'book', 'tooth', 'brush']

def split_compound_word(word, components):
    for component in components:
        if word.startswith(component):
            remaining = word[len(component):]
            if remaining in components:
                return component, remaining
    return word

print("Split Compounds:", {w: split_compound_word(w, common_words) for w in compound_words})

try:
    nlp = spacy.load("en_core_web_sm")
    doc = nlp("The football players were practicing on the basketball court.")
    for token in doc:
        if token.dep_ == "compound":
            print(f"Compound word found: {token.text} -> Head: {token.head.text}")
except:
    print("Spacy model 'en_core_web_sm' not found.")`,
      },
    ],
  },
  {
    id: "prac-4",
    title: "Prac 4 (Edit Distance & Weighted Edit Distance)",
    description: "Calculate standard Levenshtein distance and weighted edit distance between strings.",
    language: "python",
    tags: ["nltk", "edit-distance", "algorithms"],
    code: `def edit_distance(s1, s2):
    m, n = len(s1), len(s2)
    dp = [[0] * (n + 1) for _ in range(m + 1)]
    for i in range(m + 1): dp[i][0] = i 
    for j in range(n + 1): dp[0][j] = j  
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if s1[i - 1] == s2[j - 1]:
                dp[i][j] = dp[i - 1][j - 1] 
            else:
                dp[i][j] = min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1] + 1)
    return dp[m][n]`,
    sections: [
      {
        title: "Edit Distance",
        code: `def edit_distance(s1, s2):
    m, n = len(s1), len(s2)
    dp = [[0] * (n + 1) for _ in range(m + 1)]

    for i in range(m + 1):
        dp[i][0] = i 
    for j in range(n + 1):
        dp[0][j] = j  

    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if s1[i - 1] == s2[j - 1]:
                dp[i][j] = dp[i - 1][j - 1] 
            else:
                dp[i][j] = min(
                    dp[i - 1][j] + 1, 
                    dp[i][j - 1] + 1,  
                    dp[i - 1][j - 1] + 1 
                )

    print("Edit Distance Matrix:")
    for row in dp:
        print(row)

    return dp[m][n]

s1 = "kitten"
s2 = "sitting"
edit_distance_result = edit_distance(s1, s2)
print("\\nEdit Distance:", edit_distance_result)`,
      },
      {
        title: "Weighted Edit Distance",
        code: `def weighted_edit_distance(s1, s2, ins_cost=1, del_cost=1, sub_cost=1):
    m, n = len(s1), len(s2)
    dp = [[0] * (n + 1) for _ in range(m + 1)]

    for i in range(m + 1):
        dp[i][0] = i * del_cost  
    for j in range(n + 1):
        dp[0][j] = j * ins_cost  

    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if s1[i - 1] == s2[j - 1]:
                dp[i][j] = dp[i - 1][j - 1]  
            else:
                dp[i][j] = min(
                    dp[i - 1][j] + del_cost,  
                    dp[i][j - 1] + ins_cost,  
                    dp[i - 1][j - 1] + sub_cost  
                )

    print("Weighted Edit Distance Matrix:")
    for row in dp:
        print(row)

    return dp[m][n]

s1 = "kitten"
s2 = "sitting"
insertion_cost = 1
deletion_cost = 1
substitution_cost = 2

weighted_edit_distance_result = weighted_edit_distance(s1, s2, ins_cost=insertion_cost, del_cost=deletion_cost, sub_cost=substitution_cost)
print("\\nWeighted Edit Distance:", weighted_edit_distance_result)`,
      },
    ],
  },
  {
    id: "prac-5",
    title: "Prac 5 (N-grams, Prefix & Suffix)",
    description: "Generate N-grams and extract word affixes (prefixes and suffixes).",
    language: "python",
    tags: ["nltk", "textblob", "n-grams"],
    code: `from textblob import TextBlob
sentence = "Technology is best when it brings people together"
ngram_object = TextBlob(sentence)
print(ngram_object.ngrams(n=2))`,
    sections: [
      {
        title: "Bigram & Trigram",
        code: `import nltk
nltk.download('punkt')
nltk.download('punkt_tab')
from textblob import TextBlob

sentence = "Technology is best when it brings people together"
ngram_object = TextBlob(sentence)

bigrams = ngram_object.ngrams(n=2) 
print(f"Bigrams: {bigrams}")

trigrams = ngram_object.ngrams(n=3) 
print(f"Trigrams: {trigrams}")`,
      },
      {
        title: "Suffix & Prefix",
        code: `import random
from collections import defaultdict

def generate_word_ngrams(text, n):
    words = text.split()
    return list(zip(*[words[i:] for i in range(n)]))

def build_word_ngram_model(text, n):
    model = defaultdict(list)
    ngrams = generate_word_ngrams(text, n)
    for ngram in ngrams:
        prefix = tuple(ngram[:-1])
        suffix = ngram[-1]
        model[prefix].append(suffix)
    return model

def generate_word_text(model, n, length=10):
    prefix = random.choice(list(model.keys()))
    generated = list(prefix)
    print("\\n--- WORD GENERATION PROCESS ---")
    for _ in range(length - n + 1):
        suffixes = model.get(prefix, [])
        if suffixes:
            suffix = random.choice(suffixes)
            print(f"Prefix {prefix} -> Suffix FOUND: {suffix}")
            generated.append(suffix)
            prefix = tuple(generated[-(n-1):])
        else:
            print(f"Prefix {prefix} -> NO SUFFIX FOUND")
            break
    return ' '.join(generated)

def generate_char_ngrams(text, n):
    return list(zip(*[text[i:] for i in range(n)]))

def build_char_ngram_model(text, n):
    model = defaultdict(list)
    ngrams = generate_char_ngrams(text, n)
    for ngram in ngrams:
        prefix = tuple(ngram[:-1])
        suffix = ngram[-1]
        model[prefix].append(suffix)
    return model

def generate_char_text(model, n, length=50):
    prefix = random.choice(list(model.keys()))
    generated = ''.join(prefix)
    print("\\n-- CHAR GENERATION PROCESS --")
    for _ in range(length - n + 1):
        suffixes = model.get(prefix, [])
        if suffixes:
            suffix = random.choice(suffixes)
            print(f"Prefix {prefix} -> Suffix FOUND: {suffix}")
            generated += suffix
            prefix = tuple(generated[-(n-1):])
        else:
            print(f"Prefix {prefix} -> NO SUFFIX FOUND (switching prefix)")
            prefix = random.choice(list(model.keys()))
            continue
    return generated

text1 = "I am learning machine learning and natural language processing"
n1 = 3
word_model = build_word_ngram_model(text1, n1)
print("Word N-gram Model:\\n", dict(word_model))
print("Generated Word Text:", generate_word_text(word_model, n1, length=10))

text2 = "hello world, welcome to the n-gram model!"
n2 = 4
char_model = build_char_ngram_model(text2, n2)
print("\\nChar N-gram Model:\\n", dict(char_model))
print("Generated Char Text:", generate_char_text(char_model, n2, length=50))`,
      },
      {
        title: "Bi, Tri & Suffix",
        code: `import nltk
nltk.download('punkt')
nltk.download('punkt_tab')
from textblob import TextBlob

sentence = "Technology is best when it brings people together"
ngram_object = TextBlob(sentence)

bigrams = ngram_object.ngrams(n=2) 
print(f"Bigrams: {bigrams}")

trigrams = ngram_object.ngrams(n=3) 
print(f"Trigrams: {trigrams}")

import random
from collections import defaultdict

def generate_word_ngrams(text, n):
    words = text.split()
    return list(zip(*[words[i:] for i in range(n)]))

def build_word_ngram_model(text, n):
    model = defaultdict(list)
    ngrams = generate_word_ngrams(text, n)
    for ngram in ngrams:
        prefix = tuple(ngram[:-1])
        suffix = ngram[-1]
        model[prefix].append(suffix)
    return model

def generate_word_text(model, n, length=10):
    prefix = random.choice(list(model.keys()))
    generated = list(prefix)
    print("\\n--- WORD GENERATION PROCESS ---")
    for _ in range(length - n + 1):
        suffixes = model.get(prefix, [])
        if suffixes:
            suffix = random.choice(suffixes)
            print(f"Prefix {prefix} -> Suffix FOUND: {suffix}")
            generated.append(suffix)
            prefix = tuple(generated[-(n-1):])
        else:
            print(f"Prefix {prefix} -> NO SUFFIX FOUND")
            break
    return ' '.join(generated)

def generate_char_ngrams(text, n):
    return list(zip(*[text[i:] for i in range(n)]))

def build_char_ngram_model(text, n):
    model = defaultdict(list)
    ngrams = generate_char_ngrams(text, n)
    for ngram in ngrams:
        prefix = tuple(ngram[:-1])
        suffix = ngram[-1]
        model[prefix].append(suffix)
    return model

def generate_char_text(model, n, length=50):
    prefix = random.choice(list(model.keys()))
    generated = ''.join(prefix)
    print("\\n-- CHAR GENERATION PROCESS --")
    for _ in range(length - n + 1):
        suffixes = model.get(prefix, [])
        if suffixes:
            suffix = random.choice(suffixes)
            print(f"Prefix {prefix} -> Suffix FOUND: {suffix}")
            generated += suffix
            prefix = tuple(generated[-(n-1):])
        else:
            print(f"Prefix {prefix} -> NO SUFFIX FOUND (switching prefix)")
            prefix = random.choice(list(model.keys()))
            continue
    return generated

text1 = "I am learning machine learning and natural language processing"
n1 = 3
word_model = build_word_ngram_model(text1, n1)
print("Word N-gram Model:\\n", dict(word_model))
print("Generated Word Text:", generate_word_text(word_model, n1, length=10))

text2 = "hello world, welcome to the n-gram model!"
n2 = 4
char_model = build_char_ngram_model(text2, n2)
print("\\nChar N-gram Model:\\n", dict(char_model))
print("Generated Char Text:", generate_char_text(char_model, n2, length=50))`,
      },
    ],
  },
  {
    id: "prac-6",
    title: "Prac 6 (NER)",
    description: "Named Entity Recognition using NLTK.",
    language: "python",
    tags: ["nltk", "ner"],
    code: `import nltk
sentence = "Apple is looking at buying U.K. startup for $1 billion"
tokens = nltk.word_tokenize(sentence)
pos_tags = nltk.pos_tag(tokens)
chunks = nltk.ne_chunk(pos_tags)
print(chunks)`,
  },
  {
    id: "prac-7",
    title: "Prac 7 (Wordnet)",
    description: "Exploring synsets and lemmas in WordNet.",
    language: "python",
    tags: ["nltk", "wordnet"],
    code: `from nltk.corpus import wordnet
syn = wordnet.synsets("program")[0]
print(syn.name())
print(syn.definition())`,
  },
  {
    id: "prac-8",
    title: "Prac 8 (TF-IDF)",
    description: "Compute TF-IDF values for a set of documents.",
    language: "python",
    tags: ["sklearn", "tfidf"],
    code: `from sklearn.feature_extraction.text import TfidfVectorizer
corpus = ["This is the first document.", "This document is the second document."]
vectorizer = TfidfVectorizer()
X = vectorizer.fit_transform(corpus)
print(vectorizer.get_feature_names_out())`,
  },
  {
    id: "prac-9",
    title: "Prac 9 (Sentiment Analysis)",
    description: "Simple sentiment analysis using TextBlob or NLTK.",
    language: "python",
    tags: ["textblob", "sentiment"],
    code: `from textblob import TextBlob
text = "I love this library! It is very easy to use."
blob = TextBlob(text)
print(blob.sentiment)`,
  },
  {
    id: "prac-10",
    title: "Prac 10 (Text Summarization)",
    description: "Frequency-based text summarization.",
    language: "python",
    tags: ["nltk", "summarization"],
    code: `# Frequency-based summarization logic
import nltk
from nltk.corpus import stopwords
# ... placeholder for summarization`,
  },
];
