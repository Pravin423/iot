export interface Snippet {
  id: string;
  title: string;
  description: string;
  language: string;
  code: string;
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
];
