document.write('<link rel="stylesheet" href="https://assets-cdn.github.com/assets/gist-embed-8c6ade0d3779da026346afb9bf324f67.css">')
document.write('<div id=\"gist88899871\" class=\"gist\">\n    <div class=\"gist-file\">\n      <div class=\"gist-data\">\n        <div class=\"js-gist-file-update-container js-task-list-container file-box\">\n  <div id=\"file-topic9_hw_first-py\" class=\"file\">\n    \n\n  <div itemprop=\"text\" class=\"blob-wrapper data type-python\">\n      <table class=\"highlight tab-size js-file-line-container\" data-tab-size=\"8\">\n      <tr>\n        <td id=\"file-topic9_hw_first-py-L1\" class=\"blob-num js-line-number\" data-line-number=\"1\"><\/td>\n        <td id=\"file-topic9_hw_first-py-LC1\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-k\">%%<\/span>time<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_hw_first-py-L2\" class=\"blob-num js-line-number\" data-line-number=\"2\"><\/td>\n        <td id=\"file-topic9_hw_first-py-LC2\" class=\"blob-code blob-code-inner js-file-line\">data <span class=\"pl-k\">=<\/span> ads.Ads[:<span class=\"pl-k\">-<\/span><span class=\"pl-c1\">20<\/span>] <span class=\"pl-c\"><span class=\"pl-c\">#<\/span> leave some data for testing<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_hw_first-py-L3\" class=\"blob-num js-line-number\" data-line-number=\"3\"><\/td>\n        <td id=\"file-topic9_hw_first-py-LC3\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_hw_first-py-L4\" class=\"blob-num js-line-number\" data-line-number=\"4\"><\/td>\n        <td id=\"file-topic9_hw_first-py-LC4\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c\"><span class=\"pl-c\">#<\/span> initializing model parameters alpha, beta and gamma<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_hw_first-py-L5\" class=\"blob-num js-line-number\" data-line-number=\"5\"><\/td>\n        <td id=\"file-topic9_hw_first-py-LC5\" class=\"blob-code blob-code-inner js-file-line\">x <span class=\"pl-k\">=<\/span> [<span class=\"pl-c1\">0<\/span>, <span class=\"pl-c1\">0<\/span>, <span class=\"pl-c1\">0<\/span>] <\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_hw_first-py-L6\" class=\"blob-num js-line-number\" data-line-number=\"6\"><\/td>\n        <td id=\"file-topic9_hw_first-py-LC6\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_hw_first-py-L7\" class=\"blob-num js-line-number\" data-line-number=\"7\"><\/td>\n        <td id=\"file-topic9_hw_first-py-LC7\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c\"><span class=\"pl-c\">#<\/span> Minimizing the loss function <\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_hw_first-py-L8\" class=\"blob-num js-line-number\" data-line-number=\"8\"><\/td>\n        <td id=\"file-topic9_hw_first-py-LC8\" class=\"blob-code blob-code-inner js-file-line\">opt <span class=\"pl-k\">=<\/span> minimize(timeseriesCVscore, <span class=\"pl-v\">x0<\/span><span class=\"pl-k\">=<\/span>x, <\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_hw_first-py-L9\" class=\"blob-num js-line-number\" data-line-number=\"9\"><\/td>\n        <td id=\"file-topic9_hw_first-py-LC9\" class=\"blob-code blob-code-inner js-file-line\">               <span class=\"pl-v\">args<\/span><span class=\"pl-k\">=<\/span>(data, mean_squared_log_error), <\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_hw_first-py-L10\" class=\"blob-num js-line-number\" data-line-number=\"10\"><\/td>\n        <td id=\"file-topic9_hw_first-py-LC10\" class=\"blob-code blob-code-inner js-file-line\">               <span class=\"pl-v\">method<\/span><span class=\"pl-k\">=<\/span><span class=\"pl-s\"><span class=\"pl-pds\">&quot;<\/span>TNC<span class=\"pl-pds\">&quot;<\/span><\/span>, <span class=\"pl-v\">bounds<\/span> <span class=\"pl-k\">=<\/span> ((<span class=\"pl-c1\">0<\/span>, <span class=\"pl-c1\">1<\/span>), (<span class=\"pl-c1\">0<\/span>, <span class=\"pl-c1\">1<\/span>), (<span class=\"pl-c1\">0<\/span>, <span class=\"pl-c1\">1<\/span>))<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_hw_first-py-L11\" class=\"blob-num js-line-number\" data-line-number=\"11\"><\/td>\n        <td id=\"file-topic9_hw_first-py-LC11\" class=\"blob-code blob-code-inner js-file-line\">              )<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_hw_first-py-L12\" class=\"blob-num js-line-number\" data-line-number=\"12\"><\/td>\n        <td id=\"file-topic9_hw_first-py-LC12\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_hw_first-py-L13\" class=\"blob-num js-line-number\" data-line-number=\"13\"><\/td>\n        <td id=\"file-topic9_hw_first-py-LC13\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c\"><span class=\"pl-c\">#<\/span> Take optimal values...<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_hw_first-py-L14\" class=\"blob-num js-line-number\" data-line-number=\"14\"><\/td>\n        <td id=\"file-topic9_hw_first-py-LC14\" class=\"blob-code blob-code-inner js-file-line\">alpha_final, beta_final, gamma_final <span class=\"pl-k\">=<\/span> opt.x<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_hw_first-py-L15\" class=\"blob-num js-line-number\" data-line-number=\"15\"><\/td>\n        <td id=\"file-topic9_hw_first-py-LC15\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c1\">print<\/span>(alpha_final, beta_final, gamma_final)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_hw_first-py-L16\" class=\"blob-num js-line-number\" data-line-number=\"16\"><\/td>\n        <td id=\"file-topic9_hw_first-py-LC16\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_hw_first-py-L17\" class=\"blob-num js-line-number\" data-line-number=\"17\"><\/td>\n        <td id=\"file-topic9_hw_first-py-LC17\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c\"><span class=\"pl-c\">#<\/span> ...and train the model with them, forecasting for the next 50 hours<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_hw_first-py-L18\" class=\"blob-num js-line-number\" data-line-number=\"18\"><\/td>\n        <td id=\"file-topic9_hw_first-py-LC18\" class=\"blob-code blob-code-inner js-file-line\">model <span class=\"pl-k\">=<\/span> HoltWinters(data, <span class=\"pl-v\">slen<\/span> <span class=\"pl-k\">=<\/span> <span class=\"pl-c1\">24<\/span>, <\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_hw_first-py-L19\" class=\"blob-num js-line-number\" data-line-number=\"19\"><\/td>\n        <td id=\"file-topic9_hw_first-py-LC19\" class=\"blob-code blob-code-inner js-file-line\">                    <span class=\"pl-v\">alpha<\/span> <span class=\"pl-k\">=<\/span> alpha_final, <\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_hw_first-py-L20\" class=\"blob-num js-line-number\" data-line-number=\"20\"><\/td>\n        <td id=\"file-topic9_hw_first-py-LC20\" class=\"blob-code blob-code-inner js-file-line\">                    <span class=\"pl-v\">beta<\/span> <span class=\"pl-k\">=<\/span> beta_final, <\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_hw_first-py-L21\" class=\"blob-num js-line-number\" data-line-number=\"21\"><\/td>\n        <td id=\"file-topic9_hw_first-py-LC21\" class=\"blob-code blob-code-inner js-file-line\">                    <span class=\"pl-v\">gamma<\/span> <span class=\"pl-k\">=<\/span> gamma_final, <\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_hw_first-py-L22\" class=\"blob-num js-line-number\" data-line-number=\"22\"><\/td>\n        <td id=\"file-topic9_hw_first-py-LC22\" class=\"blob-code blob-code-inner js-file-line\">                    <span class=\"pl-v\">n_preds<\/span> <span class=\"pl-k\">=<\/span> <span class=\"pl-c1\">50<\/span>, <span class=\"pl-v\">scaling_factor<\/span> <span class=\"pl-k\">=<\/span> <span class=\"pl-c1\">3<\/span>)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_hw_first-py-L23\" class=\"blob-num js-line-number\" data-line-number=\"23\"><\/td>\n        <td id=\"file-topic9_hw_first-py-LC23\" class=\"blob-code blob-code-inner js-file-line\">model.triple_exponential_smoothing()<\/td>\n      <\/tr>\n<\/table>\n\n\n  <\/div>\n\n  <\/div>\n<\/div>\n\n      <\/div>\n      <div class=\"gist-meta\">\n        <a href=\"https://gist.github.com/DmitrySerg/c1de87947e77308d92016eb97f3bba9b/raw/d761a90065c99da297f9a2b981c6d04330df3cbd/topic9_HW_first.py\" style=\"float:right\">view raw<\/a>\n        <a href=\"https://gist.github.com/DmitrySerg/c1de87947e77308d92016eb97f3bba9b#file-topic9_hw_first-py\">topic9_HW_first.py<\/a>\n        hosted with &#10084; by <a href=\"https://github.com\">GitHub<\/a>\n      <\/div>\n    <\/div>\n<\/div>\n')
