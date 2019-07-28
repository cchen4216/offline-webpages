document.write('<link rel="stylesheet" href="https://assets-cdn.github.com/assets/gist-embed-8c6ade0d3779da026346afb9bf324f67.css">')
document.write('<div id=\"gist88899748\" class=\"gist\">\n    <div class=\"gist-file\">\n      <div class=\"gist-data\">\n        <div class=\"js-gist-file-update-container js-task-list-container file-box\">\n  <div id=\"file-topic9_exponential_single-py\" class=\"file\">\n    \n\n  <div itemprop=\"text\" class=\"blob-wrapper data type-python\">\n      <table class=\"highlight tab-size js-file-line-container\" data-tab-size=\"8\">\n      <tr>\n        <td id=\"file-topic9_exponential_single-py-L1\" class=\"blob-num js-line-number\" data-line-number=\"1\"><\/td>\n        <td id=\"file-topic9_exponential_single-py-LC1\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-k\">def<\/span> <span class=\"pl-en\">exponential_smoothing<\/span>(<span class=\"pl-smi\">series<\/span>, <span class=\"pl-smi\">alpha<\/span>):<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_exponential_single-py-L2\" class=\"blob-num js-line-number\" data-line-number=\"2\"><\/td>\n        <td id=\"file-topic9_exponential_single-py-LC2\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-s\"><span class=\"pl-pds\">&quot;&quot;&quot;<\/span><\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_exponential_single-py-L3\" class=\"blob-num js-line-number\" data-line-number=\"3\"><\/td>\n        <td id=\"file-topic9_exponential_single-py-LC3\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-s\">        series - dataset with timestamps<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_exponential_single-py-L4\" class=\"blob-num js-line-number\" data-line-number=\"4\"><\/td>\n        <td id=\"file-topic9_exponential_single-py-LC4\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-s\">        alpha - float [0.0, 1.0], smoothing parameter<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_exponential_single-py-L5\" class=\"blob-num js-line-number\" data-line-number=\"5\"><\/td>\n        <td id=\"file-topic9_exponential_single-py-LC5\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-s\">    <span class=\"pl-pds\">&quot;&quot;&quot;<\/span><\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_exponential_single-py-L6\" class=\"blob-num js-line-number\" data-line-number=\"6\"><\/td>\n        <td id=\"file-topic9_exponential_single-py-LC6\" class=\"blob-code blob-code-inner js-file-line\">    result <span class=\"pl-k\">=<\/span> [series[<span class=\"pl-c1\">0<\/span>]] <span class=\"pl-c\"><span class=\"pl-c\">#<\/span> first value is same as series<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_exponential_single-py-L7\" class=\"blob-num js-line-number\" data-line-number=\"7\"><\/td>\n        <td id=\"file-topic9_exponential_single-py-LC7\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-k\">for<\/span> n <span class=\"pl-k\">in<\/span> <span class=\"pl-c1\">range<\/span>(<span class=\"pl-c1\">1<\/span>, <span class=\"pl-c1\">len<\/span>(series)):<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_exponential_single-py-L8\" class=\"blob-num js-line-number\" data-line-number=\"8\"><\/td>\n        <td id=\"file-topic9_exponential_single-py-LC8\" class=\"blob-code blob-code-inner js-file-line\">        result.append(alpha <span class=\"pl-k\">*<\/span> series[n] <span class=\"pl-k\">+<\/span> (<span class=\"pl-c1\">1<\/span> <span class=\"pl-k\">-<\/span> alpha) <span class=\"pl-k\">*<\/span> result[n<span class=\"pl-k\">-<\/span><span class=\"pl-c1\">1<\/span>])<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_exponential_single-py-L9\" class=\"blob-num js-line-number\" data-line-number=\"9\"><\/td>\n        <td id=\"file-topic9_exponential_single-py-LC9\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-k\">return<\/span> result<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_exponential_single-py-L10\" class=\"blob-num js-line-number\" data-line-number=\"10\"><\/td>\n        <td id=\"file-topic9_exponential_single-py-LC10\" class=\"blob-code blob-code-inner js-file-line\">    <\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_exponential_single-py-L11\" class=\"blob-num js-line-number\" data-line-number=\"11\"><\/td>\n        <td id=\"file-topic9_exponential_single-py-LC11\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-k\">def<\/span> <span class=\"pl-en\">plotExponentialSmoothing<\/span>(<span class=\"pl-smi\">series<\/span>, <span class=\"pl-smi\">alphas<\/span>):<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_exponential_single-py-L12\" class=\"blob-num js-line-number\" data-line-number=\"12\"><\/td>\n        <td id=\"file-topic9_exponential_single-py-LC12\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-s\"><span class=\"pl-pds\">&quot;&quot;&quot;<\/span><\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_exponential_single-py-L13\" class=\"blob-num js-line-number\" data-line-number=\"13\"><\/td>\n        <td id=\"file-topic9_exponential_single-py-LC13\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-s\">        Plots exponential smoothing with different alphas<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_exponential_single-py-L14\" class=\"blob-num js-line-number\" data-line-number=\"14\"><\/td>\n        <td id=\"file-topic9_exponential_single-py-LC14\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-s\">        <\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_exponential_single-py-L15\" class=\"blob-num js-line-number\" data-line-number=\"15\"><\/td>\n        <td id=\"file-topic9_exponential_single-py-LC15\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-s\">        series - dataset with timestamps<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_exponential_single-py-L16\" class=\"blob-num js-line-number\" data-line-number=\"16\"><\/td>\n        <td id=\"file-topic9_exponential_single-py-LC16\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-s\">        alphas - list of floats, smoothing parameters<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_exponential_single-py-L17\" class=\"blob-num js-line-number\" data-line-number=\"17\"><\/td>\n        <td id=\"file-topic9_exponential_single-py-LC17\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-s\">        <\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_exponential_single-py-L18\" class=\"blob-num js-line-number\" data-line-number=\"18\"><\/td>\n        <td id=\"file-topic9_exponential_single-py-LC18\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-s\">    <span class=\"pl-pds\">&quot;&quot;&quot;<\/span><\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_exponential_single-py-L19\" class=\"blob-num js-line-number\" data-line-number=\"19\"><\/td>\n        <td id=\"file-topic9_exponential_single-py-LC19\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-k\">with<\/span> plt.style.context(<span class=\"pl-s\"><span class=\"pl-pds\">&#39;<\/span>seaborn-white<span class=\"pl-pds\">&#39;<\/span><\/span>):    <\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_exponential_single-py-L20\" class=\"blob-num js-line-number\" data-line-number=\"20\"><\/td>\n        <td id=\"file-topic9_exponential_single-py-LC20\" class=\"blob-code blob-code-inner js-file-line\">        plt.figure(<span class=\"pl-v\">figsize<\/span><span class=\"pl-k\">=<\/span>(<span class=\"pl-c1\">15<\/span>, <span class=\"pl-c1\">7<\/span>))<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_exponential_single-py-L21\" class=\"blob-num js-line-number\" data-line-number=\"21\"><\/td>\n        <td id=\"file-topic9_exponential_single-py-LC21\" class=\"blob-code blob-code-inner js-file-line\">        <span class=\"pl-k\">for<\/span> alpha <span class=\"pl-k\">in<\/span> alphas:<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_exponential_single-py-L22\" class=\"blob-num js-line-number\" data-line-number=\"22\"><\/td>\n        <td id=\"file-topic9_exponential_single-py-LC22\" class=\"blob-code blob-code-inner js-file-line\">            plt.plot(exponential_smoothing(series, alpha), <span class=\"pl-v\">label<\/span><span class=\"pl-k\">=<\/span><span class=\"pl-s\"><span class=\"pl-pds\">&quot;<\/span>Alpha <span class=\"pl-c1\">{}<\/span><span class=\"pl-pds\">&quot;<\/span><\/span>.format(alpha))<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_exponential_single-py-L23\" class=\"blob-num js-line-number\" data-line-number=\"23\"><\/td>\n        <td id=\"file-topic9_exponential_single-py-LC23\" class=\"blob-code blob-code-inner js-file-line\">        plt.plot(series.values, <span class=\"pl-s\"><span class=\"pl-pds\">&quot;<\/span>c<span class=\"pl-pds\">&quot;<\/span><\/span>, <span class=\"pl-v\">label<\/span> <span class=\"pl-k\">=<\/span> <span class=\"pl-s\"><span class=\"pl-pds\">&quot;<\/span>Actual<span class=\"pl-pds\">&quot;<\/span><\/span>)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_exponential_single-py-L24\" class=\"blob-num js-line-number\" data-line-number=\"24\"><\/td>\n        <td id=\"file-topic9_exponential_single-py-LC24\" class=\"blob-code blob-code-inner js-file-line\">        plt.legend(<span class=\"pl-v\">loc<\/span><span class=\"pl-k\">=<\/span><span class=\"pl-s\"><span class=\"pl-pds\">&quot;<\/span>best<span class=\"pl-pds\">&quot;<\/span><\/span>)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_exponential_single-py-L25\" class=\"blob-num js-line-number\" data-line-number=\"25\"><\/td>\n        <td id=\"file-topic9_exponential_single-py-LC25\" class=\"blob-code blob-code-inner js-file-line\">        plt.axis(<span class=\"pl-s\"><span class=\"pl-pds\">&#39;<\/span>tight<span class=\"pl-pds\">&#39;<\/span><\/span>)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_exponential_single-py-L26\" class=\"blob-num js-line-number\" data-line-number=\"26\"><\/td>\n        <td id=\"file-topic9_exponential_single-py-LC26\" class=\"blob-code blob-code-inner js-file-line\">        plt.title(<span class=\"pl-s\"><span class=\"pl-pds\">&quot;<\/span>Exponential Smoothing<span class=\"pl-pds\">&quot;<\/span><\/span>)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_exponential_single-py-L27\" class=\"blob-num js-line-number\" data-line-number=\"27\"><\/td>\n        <td id=\"file-topic9_exponential_single-py-LC27\" class=\"blob-code blob-code-inner js-file-line\">        plt.grid(<span class=\"pl-c1\">True<\/span>)<span class=\"pl-bu\">;<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_exponential_single-py-L28\" class=\"blob-num js-line-number\" data-line-number=\"28\"><\/td>\n        <td id=\"file-topic9_exponential_single-py-LC28\" class=\"blob-code blob-code-inner js-file-line\">        <\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_exponential_single-py-L29\" class=\"blob-num js-line-number\" data-line-number=\"29\"><\/td>\n        <td id=\"file-topic9_exponential_single-py-LC29\" class=\"blob-code blob-code-inner js-file-line\">plotExponentialSmoothing(ads.Ads, [<span class=\"pl-c1\">0.3<\/span>, <span class=\"pl-c1\">0.05<\/span>])<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_exponential_single-py-L30\" class=\"blob-num js-line-number\" data-line-number=\"30\"><\/td>\n        <td id=\"file-topic9_exponential_single-py-LC30\" class=\"blob-code blob-code-inner js-file-line\">plotExponentialSmoothing(currency.<span class=\"pl-c1\">GEMS_GEMS_SPENT<\/span>, [<span class=\"pl-c1\">0.3<\/span>, <span class=\"pl-c1\">0.05<\/span>])<\/td>\n      <\/tr>\n<\/table>\n\n\n  <\/div>\n\n  <\/div>\n<\/div>\n\n      <\/div>\n      <div class=\"gist-meta\">\n        <a href=\"https://gist.github.com/DmitrySerg/0317b8c08c8d1268c8c7cf86b4863771/raw/d2b2f1f3d1209237e8ce91ddf807bf7c85bde4f0/topic9_exponential_single.py\" style=\"float:right\">view raw<\/a>\n        <a href=\"https://gist.github.com/DmitrySerg/0317b8c08c8d1268c8c7cf86b4863771#file-topic9_exponential_single-py\">topic9_exponential_single.py<\/a>\n        hosted with &#10084; by <a href=\"https://github.com\">GitHub<\/a>\n      <\/div>\n    <\/div>\n<\/div>\n')