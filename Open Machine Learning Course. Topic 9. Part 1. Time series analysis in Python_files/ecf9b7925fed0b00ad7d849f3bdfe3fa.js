document.write('<link rel="stylesheet" href="https://assets-cdn.github.com/assets/gist-embed-8c6ade0d3779da026346afb9bf324f67.css">')
document.write('<div id=\"gist88899511\" class=\"gist\">\n    <div class=\"gist-file\">\n      <div class=\"gist-data\">\n        <div class=\"js-gist-file-update-container js-task-list-container file-box\">\n  <div id=\"file-topic9_metrics-py\" class=\"file\">\n    \n\n  <div itemprop=\"text\" class=\"blob-wrapper data type-python\">\n      <table class=\"highlight tab-size js-file-line-container\" data-tab-size=\"8\">\n      <tr>\n        <td id=\"file-topic9_metrics-py-L1\" class=\"blob-num js-line-number\" data-line-number=\"1\"><\/td>\n        <td id=\"file-topic9_metrics-py-LC1\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c\"><span class=\"pl-c\">#<\/span> Importing everything from above<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_metrics-py-L2\" class=\"blob-num js-line-number\" data-line-number=\"2\"><\/td>\n        <td id=\"file-topic9_metrics-py-LC2\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_metrics-py-L3\" class=\"blob-num js-line-number\" data-line-number=\"3\"><\/td>\n        <td id=\"file-topic9_metrics-py-LC3\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-k\">from<\/span> sklearn.metrics <span class=\"pl-k\">import<\/span> r2_score, median_absolute_error, mean_absolute_error<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_metrics-py-L4\" class=\"blob-num js-line-number\" data-line-number=\"4\"><\/td>\n        <td id=\"file-topic9_metrics-py-LC4\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-k\">from<\/span> sklearn.metrics <span class=\"pl-k\">import<\/span> median_absolute_error, mean_squared_error, mean_squared_log_error<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_metrics-py-L5\" class=\"blob-num js-line-number\" data-line-number=\"5\"><\/td>\n        <td id=\"file-topic9_metrics-py-LC5\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_metrics-py-L6\" class=\"blob-num js-line-number\" data-line-number=\"6\"><\/td>\n        <td id=\"file-topic9_metrics-py-LC6\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-k\">def<\/span> <span class=\"pl-en\">mean_absolute_percentage_error<\/span>(<span class=\"pl-smi\">y_true<\/span>, <span class=\"pl-smi\">y_pred<\/span>): <\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_metrics-py-L7\" class=\"blob-num js-line-number\" data-line-number=\"7\"><\/td>\n        <td id=\"file-topic9_metrics-py-LC7\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-k\">return<\/span> np.mean(np.abs((y_true <span class=\"pl-k\">-<\/span> y_pred) <span class=\"pl-k\">/<\/span> y_true)) <span class=\"pl-k\">*<\/span> <span class=\"pl-c1\">100<\/span><\/td>\n      <\/tr>\n<\/table>\n\n\n  <\/div>\n\n  <\/div>\n<\/div>\n\n      <\/div>\n      <div class=\"gist-meta\">\n        <a href=\"https://gist.github.com/DmitrySerg/ecf9b7925fed0b00ad7d849f3bdfe3fa/raw/57a53ec64c69b677860452fb0d185178718d5cc9/topic9_metrics.py\" style=\"float:right\">view raw<\/a>\n        <a href=\"https://gist.github.com/DmitrySerg/ecf9b7925fed0b00ad7d849f3bdfe3fa#file-topic9_metrics-py\">topic9_metrics.py<\/a>\n        hosted with &#10084; by <a href=\"https://github.com\">GitHub<\/a>\n      <\/div>\n    <\/div>\n<\/div>\n')