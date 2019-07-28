document.write('<link rel="stylesheet" href="https://assets-cdn.github.com/assets/gist-embed-6364c832764ba9bc85e4566bd747f0d1.css">')
document.write('<div id=\"gist87917074\" class=\"gist\">\n    <div class=\"gist-file\">\n      <div class=\"gist-data\">\n        <div class=\"js-gist-file-update-container js-task-list-container file-box\">\n  <div id=\"file-topic5_snippet1-py\" class=\"file\">\n    \n\n  <div itemprop=\"text\" class=\"blob-wrapper data type-python\">\n      <table class=\"highlight tab-size js-file-line-container\" data-tab-size=\"8\">\n      <tr>\n        <td id=\"file-topic5_snippet1-py-L1\" class=\"blob-num js-line-number\" data-line-number=\"1\"><\/td>\n        <td id=\"file-topic5_snippet1-py-LC1\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-k\">import<\/span> pandas <span class=\"pl-k\">as<\/span> pd<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic5_snippet1-py-L2\" class=\"blob-num js-line-number\" data-line-number=\"2\"><\/td>\n        <td id=\"file-topic5_snippet1-py-LC2\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-k\">from<\/span> matplotlib <span class=\"pl-k\">import<\/span> pyplot <span class=\"pl-k\">as<\/span> plt<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic5_snippet1-py-L3\" class=\"blob-num js-line-number\" data-line-number=\"3\"><\/td>\n        <td id=\"file-topic5_snippet1-py-LC3\" class=\"blob-code blob-code-inner js-file-line\">plt.style.use(<span class=\"pl-s\"><span class=\"pl-pds\">&#39;<\/span>ggplot<span class=\"pl-pds\">&#39;<\/span><\/span>)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic5_snippet1-py-L4\" class=\"blob-num js-line-number\" data-line-number=\"4\"><\/td>\n        <td id=\"file-topic5_snippet1-py-LC4\" class=\"blob-code blob-code-inner js-file-line\">plt.rcParams[<span class=\"pl-s\"><span class=\"pl-pds\">&#39;<\/span>figure.figsize<span class=\"pl-pds\">&#39;<\/span><\/span>] <span class=\"pl-k\">=<\/span> <span class=\"pl-c1\">10<\/span>, <span class=\"pl-c1\">6<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic5_snippet1-py-L5\" class=\"blob-num js-line-number\" data-line-number=\"5\"><\/td>\n        <td id=\"file-topic5_snippet1-py-LC5\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-k\">import<\/span> seaborn <span class=\"pl-k\">as<\/span> sns<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic5_snippet1-py-L6\" class=\"blob-num js-line-number\" data-line-number=\"6\"><\/td>\n        <td id=\"file-topic5_snippet1-py-LC6\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-k\">%<\/span>matplotlib inline<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic5_snippet1-py-L7\" class=\"blob-num js-line-number\" data-line-number=\"7\"><\/td>\n        <td id=\"file-topic5_snippet1-py-LC7\" class=\"blob-code blob-code-inner js-file-line\">telecom_data <span class=\"pl-k\">=<\/span> pd.read_csv(<span class=\"pl-s\"><span class=\"pl-pds\">&#39;<\/span>../../data/telecom_churn.csv<span class=\"pl-pds\">&#39;<\/span><\/span>)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic5_snippet1-py-L8\" class=\"blob-num js-line-number\" data-line-number=\"8\"><\/td>\n        <td id=\"file-topic5_snippet1-py-LC8\" class=\"blob-code blob-code-inner js-file-line\">fig <span class=\"pl-k\">=<\/span> sns.kdeplot(telecom_data[telecom_data[<span class=\"pl-s\"><span class=\"pl-pds\">&#39;<\/span>Churn<span class=\"pl-pds\">&#39;<\/span><\/span>] <span class=\"pl-k\">==<\/span> <span class=\"pl-c1\">False<\/span>][<span class=\"pl-s\"><span class=\"pl-pds\">&#39;<\/span>Customer service calls<span class=\"pl-pds\">&#39;<\/span><\/span>], <\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic5_snippet1-py-L9\" class=\"blob-num js-line-number\" data-line-number=\"9\"><\/td>\n        <td id=\"file-topic5_snippet1-py-LC9\" class=\"blob-code blob-code-inner js-file-line\">                  <span class=\"pl-v\">label<\/span> <span class=\"pl-k\">=<\/span> <span class=\"pl-s\"><span class=\"pl-pds\">&#39;<\/span>Loyal<span class=\"pl-pds\">&#39;<\/span><\/span>)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic5_snippet1-py-L10\" class=\"blob-num js-line-number\" data-line-number=\"10\"><\/td>\n        <td id=\"file-topic5_snippet1-py-LC10\" class=\"blob-code blob-code-inner js-file-line\">fig <span class=\"pl-k\">=<\/span> sns.kdeplot(telecom_data[telecom_data[<span class=\"pl-s\"><span class=\"pl-pds\">&#39;<\/span>Churn<span class=\"pl-pds\">&#39;<\/span><\/span>] <span class=\"pl-k\">==<\/span> <span class=\"pl-c1\">True<\/span>][<span class=\"pl-s\"><span class=\"pl-pds\">&#39;<\/span>Customer service calls<span class=\"pl-pds\">&#39;<\/span><\/span>], <\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic5_snippet1-py-L11\" class=\"blob-num js-line-number\" data-line-number=\"11\"><\/td>\n        <td id=\"file-topic5_snippet1-py-LC11\" class=\"blob-code blob-code-inner js-file-line\">                  <span class=\"pl-v\">label<\/span> <span class=\"pl-k\">=<\/span> <span class=\"pl-s\"><span class=\"pl-pds\">&#39;<\/span>Churn<span class=\"pl-pds\">&#39;<\/span><\/span>)        <\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic5_snippet1-py-L12\" class=\"blob-num js-line-number\" data-line-number=\"12\"><\/td>\n        <td id=\"file-topic5_snippet1-py-LC12\" class=\"blob-code blob-code-inner js-file-line\">fig.set(<span class=\"pl-v\">xlabel<\/span><span class=\"pl-k\">=<\/span><span class=\"pl-s\"><span class=\"pl-pds\">&#39;<\/span>Number of calls<span class=\"pl-pds\">&#39;<\/span><\/span>, <span class=\"pl-v\">ylabel<\/span><span class=\"pl-k\">=<\/span><span class=\"pl-s\"><span class=\"pl-pds\">&#39;<\/span>Density<span class=\"pl-pds\">&#39;<\/span><\/span>)    <\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic5_snippet1-py-L13\" class=\"blob-num js-line-number\" data-line-number=\"13\"><\/td>\n        <td id=\"file-topic5_snippet1-py-LC13\" class=\"blob-code blob-code-inner js-file-line\">plt.show()<\/td>\n      <\/tr>\n<\/table>\n\n\n  <\/div>\n\n  <\/div>\n<\/div>\n\n      <\/div>\n      <div class=\"gist-meta\">\n        <a href=\"https://gist.github.com/Yorko/9e57a01cb2b3f1247bac1ec8e46f3a37/raw/5bf97e56ab9d259e3d163c24fbf262841a0a5a72/topic5_snippet1.py\" style=\"float:right\">view raw<\/a>\n        <a href=\"https://gist.github.com/Yorko/9e57a01cb2b3f1247bac1ec8e46f3a37#file-topic5_snippet1-py\">topic5_snippet1.py<\/a>\n        hosted with &#10084; by <a href=\"https://github.com\">GitHub<\/a>\n      <\/div>\n    <\/div>\n<\/div>\n')