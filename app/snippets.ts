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
];
