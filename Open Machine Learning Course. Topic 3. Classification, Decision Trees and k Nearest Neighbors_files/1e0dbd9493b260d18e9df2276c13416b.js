document.write('<link rel="stylesheet" href="https://assets-cdn.github.com/assets/gist-embed-6364c832764ba9bc85e4566bd747f0d1.css">')
document.write('<div id=\"gist87923236\" class=\"gist\">\n    <div class=\"gist-file\">\n      <div class=\"gist-data\">\n        <div class=\"js-gist-file-update-container js-task-list-container file-box\">\n  <div id=\"file-topic3_snippet16-py\" class=\"file\">\n    \n\n  <div itemprop=\"text\" class=\"blob-wrapper data type-python\">\n      <table class=\"highlight tab-size js-file-line-container\" data-tab-size=\"8\">\n      <tr>\n        <td id=\"file-topic3_snippet16-py-L1\" class=\"blob-num js-line-number\" data-line-number=\"1\"><\/td>\n        <td id=\"file-topic3_snippet16-py-LC1\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-k\">from<\/span> sklearn.pipeline <span class=\"pl-k\">import<\/span> Pipeline<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic3_snippet16-py-L2\" class=\"blob-num js-line-number\" data-line-number=\"2\"><\/td>\n        <td id=\"file-topic3_snippet16-py-LC2\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-k\">from<\/span> sklearn.preprocessing <span class=\"pl-k\">import<\/span> StandardScaler<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic3_snippet16-py-L3\" class=\"blob-num js-line-number\" data-line-number=\"3\"><\/td>\n        <td id=\"file-topic3_snippet16-py-LC3\" class=\"blob-code blob-code-inner js-file-line\">knn_pipe <span class=\"pl-k\">=<\/span> Pipeline([(<span class=\"pl-s\"><span class=\"pl-pds\">&#39;<\/span>scaler<span class=\"pl-pds\">&#39;<\/span><\/span>, StandardScaler()), <\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic3_snippet16-py-L4\" class=\"blob-num js-line-number\" data-line-number=\"4\"><\/td>\n        <td id=\"file-topic3_snippet16-py-LC4\" class=\"blob-code blob-code-inner js-file-line\">                     (<span class=\"pl-s\"><span class=\"pl-pds\">&#39;<\/span>knn<span class=\"pl-pds\">&#39;<\/span><\/span>, KNeighborsClassifier(<span class=\"pl-v\">n_jobs<\/span><span class=\"pl-k\">=<\/span><span class=\"pl-k\">-<\/span><span class=\"pl-c1\">1<\/span>))])<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic3_snippet16-py-L5\" class=\"blob-num js-line-number\" data-line-number=\"5\"><\/td>\n        <td id=\"file-topic3_snippet16-py-LC5\" class=\"blob-code blob-code-inner js-file-line\">knn_params <span class=\"pl-k\">=<\/span> {<span class=\"pl-s\"><span class=\"pl-pds\">&#39;<\/span>knn__n_neighbors<span class=\"pl-pds\">&#39;<\/span><\/span>: <span class=\"pl-c1\">range<\/span>(<span class=\"pl-c1\">1<\/span>, <span class=\"pl-c1\">10<\/span>)}<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic3_snippet16-py-L6\" class=\"blob-num js-line-number\" data-line-number=\"6\"><\/td>\n        <td id=\"file-topic3_snippet16-py-LC6\" class=\"blob-code blob-code-inner js-file-line\">knn_grid <span class=\"pl-k\">=<\/span> GridSearchCV(knn_pipe, knn_params,<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic3_snippet16-py-L7\" class=\"blob-num js-line-number\" data-line-number=\"7\"><\/td>\n        <td id=\"file-topic3_snippet16-py-LC7\" class=\"blob-code blob-code-inner js-file-line\">                        <span class=\"pl-v\">cv<\/span><span class=\"pl-k\">=<\/span><span class=\"pl-c1\">5<\/span>, <span class=\"pl-v\">n_jobs<\/span><span class=\"pl-k\">=<\/span><span class=\"pl-k\">-<\/span><span class=\"pl-c1\">1<\/span>, <span class=\"pl-v\">verbose<\/span><span class=\"pl-k\">=<\/span><span class=\"pl-c1\">True<\/span>)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic3_snippet16-py-L8\" class=\"blob-num js-line-number\" data-line-number=\"8\"><\/td>\n        <td id=\"file-topic3_snippet16-py-LC8\" class=\"blob-code blob-code-inner js-file-line\">knn_grid.fit(X_train, y_train)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic3_snippet16-py-L9\" class=\"blob-num js-line-number\" data-line-number=\"9\"><\/td>\n        <td id=\"file-topic3_snippet16-py-LC9\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c1\">print<\/span>(knn_grid.best_params_, knn_grid.best_score_)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic3_snippet16-py-L10\" class=\"blob-num js-line-number\" data-line-number=\"10\"><\/td>\n        <td id=\"file-topic3_snippet16-py-LC10\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c\"><span class=\"pl-c\">#<\/span> ({&#39;knn__n_neighbors&#39;: 7}, 0.886)<\/span><\/td>\n      <\/tr>\n<\/table>\n\n\n  <\/div>\n\n  <\/div>\n<\/div>\n\n      <\/div>\n      <div class=\"gist-meta\">\n        <a href=\"https://gist.github.com/Yorko/1e0dbd9493b260d18e9df2276c13416b/raw/01a9cef0e75bc2d920d18c609762c84b96f90f51/topic3_snippet16.py\" style=\"float:right\">view raw<\/a>\n        <a href=\"https://gist.github.com/Yorko/1e0dbd9493b260d18e9df2276c13416b#file-topic3_snippet16-py\">topic3_snippet16.py<\/a>\n        hosted with &#10084; by <a href=\"https://github.com\">GitHub<\/a>\n      <\/div>\n    <\/div>\n<\/div>\n')