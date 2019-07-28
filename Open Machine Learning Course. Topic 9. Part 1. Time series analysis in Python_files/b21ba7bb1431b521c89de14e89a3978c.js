document.write('<link rel="stylesheet" href="https://assets-cdn.github.com/assets/gist-embed-8c6ade0d3779da026346afb9bf324f67.css">')
document.write('<div id=\"gist88898827\" class=\"gist\">\n    <div class=\"gist-file\">\n      <div class=\"gist-data\">\n        <div class=\"js-gist-file-update-container js-task-list-container file-box\">\n  <div id=\"file-topic_9_imports-py\" class=\"file\">\n    \n\n  <div itemprop=\"text\" class=\"blob-wrapper data type-python\">\n      <table class=\"highlight tab-size js-file-line-container\" data-tab-size=\"8\">\n      <tr>\n        <td id=\"file-topic_9_imports-py-L1\" class=\"blob-num js-line-number\" data-line-number=\"1\"><\/td>\n        <td id=\"file-topic_9_imports-py-LC1\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-k\">import<\/span> numpy <span class=\"pl-k\">as<\/span> np                               <span class=\"pl-c\"><span class=\"pl-c\">#<\/span> vectors and matrices<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic_9_imports-py-L2\" class=\"blob-num js-line-number\" data-line-number=\"2\"><\/td>\n        <td id=\"file-topic_9_imports-py-LC2\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-k\">import<\/span> pandas <span class=\"pl-k\">as<\/span> pd                              <span class=\"pl-c\"><span class=\"pl-c\">#<\/span> tables and data manipulations<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic_9_imports-py-L3\" class=\"blob-num js-line-number\" data-line-number=\"3\"><\/td>\n        <td id=\"file-topic_9_imports-py-LC3\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-k\">import<\/span> matplotlib.pyplot <span class=\"pl-k\">as<\/span> plt                  <span class=\"pl-c\"><span class=\"pl-c\">#<\/span> plots<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic_9_imports-py-L4\" class=\"blob-num js-line-number\" data-line-number=\"4\"><\/td>\n        <td id=\"file-topic_9_imports-py-LC4\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-k\">import<\/span> seaborn <span class=\"pl-k\">as<\/span> sns                            <span class=\"pl-c\"><span class=\"pl-c\">#<\/span> more plots<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic_9_imports-py-L5\" class=\"blob-num js-line-number\" data-line-number=\"5\"><\/td>\n        <td id=\"file-topic_9_imports-py-LC5\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic_9_imports-py-L6\" class=\"blob-num js-line-number\" data-line-number=\"6\"><\/td>\n        <td id=\"file-topic_9_imports-py-LC6\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-k\">from<\/span> dateutil.relativedelta <span class=\"pl-k\">import<\/span> relativedelta <span class=\"pl-c\"><span class=\"pl-c\">#<\/span> working with dates with style<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic_9_imports-py-L7\" class=\"blob-num js-line-number\" data-line-number=\"7\"><\/td>\n        <td id=\"file-topic_9_imports-py-LC7\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-k\">from<\/span> scipy.optimize <span class=\"pl-k\">import<\/span> minimize              <span class=\"pl-c\"><span class=\"pl-c\">#<\/span> for function minimization<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic_9_imports-py-L8\" class=\"blob-num js-line-number\" data-line-number=\"8\"><\/td>\n        <td id=\"file-topic_9_imports-py-LC8\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic_9_imports-py-L9\" class=\"blob-num js-line-number\" data-line-number=\"9\"><\/td>\n        <td id=\"file-topic_9_imports-py-LC9\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-k\">import<\/span> statsmodels.formula.api <span class=\"pl-k\">as<\/span> smf            <span class=\"pl-c\"><span class=\"pl-c\">#<\/span> statistics and econometrics<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic_9_imports-py-L10\" class=\"blob-num js-line-number\" data-line-number=\"10\"><\/td>\n        <td id=\"file-topic_9_imports-py-LC10\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-k\">import<\/span> statsmodels.tsa.api <span class=\"pl-k\">as<\/span> smt<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic_9_imports-py-L11\" class=\"blob-num js-line-number\" data-line-number=\"11\"><\/td>\n        <td id=\"file-topic_9_imports-py-LC11\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-k\">import<\/span> statsmodels.api <span class=\"pl-k\">as<\/span> sm<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic_9_imports-py-L12\" class=\"blob-num js-line-number\" data-line-number=\"12\"><\/td>\n        <td id=\"file-topic_9_imports-py-LC12\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-k\">import<\/span> scipy.stats <span class=\"pl-k\">as<\/span> scs<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic_9_imports-py-L13\" class=\"blob-num js-line-number\" data-line-number=\"13\"><\/td>\n        <td id=\"file-topic_9_imports-py-LC13\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic_9_imports-py-L14\" class=\"blob-num js-line-number\" data-line-number=\"14\"><\/td>\n        <td id=\"file-topic_9_imports-py-LC14\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-k\">from<\/span> itertools <span class=\"pl-k\">import<\/span> product                    <span class=\"pl-c\"><span class=\"pl-c\">#<\/span> some useful functions<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic_9_imports-py-L15\" class=\"blob-num js-line-number\" data-line-number=\"15\"><\/td>\n        <td id=\"file-topic_9_imports-py-LC15\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-k\">from<\/span> tqdm <span class=\"pl-k\">import<\/span> tqdm_notebook<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic_9_imports-py-L16\" class=\"blob-num js-line-number\" data-line-number=\"16\"><\/td>\n        <td id=\"file-topic_9_imports-py-LC16\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic_9_imports-py-L17\" class=\"blob-num js-line-number\" data-line-number=\"17\"><\/td>\n        <td id=\"file-topic_9_imports-py-LC17\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-k\">import<\/span> warnings                                  <span class=\"pl-c\"><span class=\"pl-c\">#<\/span> `do not disturbe` mode<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic_9_imports-py-L18\" class=\"blob-num js-line-number\" data-line-number=\"18\"><\/td>\n        <td id=\"file-topic_9_imports-py-LC18\" class=\"blob-code blob-code-inner js-file-line\">warnings.filterwarnings(<span class=\"pl-s\"><span class=\"pl-pds\">&#39;<\/span>ignore<span class=\"pl-pds\">&#39;<\/span><\/span>)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic_9_imports-py-L19\" class=\"blob-num js-line-number\" data-line-number=\"19\"><\/td>\n        <td id=\"file-topic_9_imports-py-LC19\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic_9_imports-py-L20\" class=\"blob-num js-line-number\" data-line-number=\"20\"><\/td>\n        <td id=\"file-topic_9_imports-py-LC20\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-k\">%<\/span>matplotlib inline<\/td>\n      <\/tr>\n<\/table>\n\n\n  <\/div>\n\n  <\/div>\n<\/div>\n\n      <\/div>\n      <div class=\"gist-meta\">\n        <a href=\"https://gist.github.com/DmitrySerg/b21ba7bb1431b521c89de14e89a3978c/raw/e0a8eb07a9be5d5b4405e25d123931b68e31b5b7/topic_9_imports.py\" style=\"float:right\">view raw<\/a>\n        <a href=\"https://gist.github.com/DmitrySerg/b21ba7bb1431b521c89de14e89a3978c#file-topic_9_imports-py\">topic_9_imports.py<\/a>\n        hosted with &#10084; by <a href=\"https://github.com\">GitHub<\/a>\n      <\/div>\n    <\/div>\n<\/div>\n')
