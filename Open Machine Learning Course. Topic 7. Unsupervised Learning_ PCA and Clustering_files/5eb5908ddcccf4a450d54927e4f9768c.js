document.write('<link rel="stylesheet" href="https://assets-cdn.github.com/assets/gist-embed-6364c832764ba9bc85e4566bd747f0d1.css">')
document.write('<div id=\"gist88612483\" class=\"gist\">\n    <div class=\"gist-file\">\n      <div class=\"gist-data\">\n        <div class=\"js-gist-file-update-container js-task-list-container file-box\">\n  <div id=\"file-topic7_2-py\" class=\"file\">\n    \n\n  <div itemprop=\"text\" class=\"blob-wrapper data type-python\">\n      <table class=\"highlight tab-size js-file-line-container\" data-tab-size=\"8\">\n      <tr>\n        <td id=\"file-topic7_2-py-L1\" class=\"blob-num js-line-number\" data-line-number=\"1\"><\/td>\n        <td id=\"file-topic7_2-py-LC1\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-k\">from<\/span> sklearn.tree <span class=\"pl-k\">import<\/span> DecisionTreeClassifier<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic7_2-py-L2\" class=\"blob-num js-line-number\" data-line-number=\"2\"><\/td>\n        <td id=\"file-topic7_2-py-LC2\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-k\">from<\/span> sklearn.model_selection <span class=\"pl-k\">import<\/span> train_test_split<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic7_2-py-L3\" class=\"blob-num js-line-number\" data-line-number=\"3\"><\/td>\n        <td id=\"file-topic7_2-py-LC3\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-k\">from<\/span> sklearn.metrics <span class=\"pl-k\">import<\/span> accuracy_score, roc_auc_score<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic7_2-py-L4\" class=\"blob-num js-line-number\" data-line-number=\"4\"><\/td>\n        <td id=\"file-topic7_2-py-LC4\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic7_2-py-L5\" class=\"blob-num js-line-number\" data-line-number=\"5\"><\/td>\n        <td id=\"file-topic7_2-py-LC5\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c\"><span class=\"pl-c\">#<\/span> Train, test splits<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic7_2-py-L6\" class=\"blob-num js-line-number\" data-line-number=\"6\"><\/td>\n        <td id=\"file-topic7_2-py-LC6\" class=\"blob-code blob-code-inner js-file-line\">X_train, X_test, y_train, y_test <span class=\"pl-k\">=<\/span> train_test_split(X, y, <span class=\"pl-v\">test_size<\/span><span class=\"pl-k\">=<\/span><span class=\"pl-c1\">.3<\/span>, <\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic7_2-py-L7\" class=\"blob-num js-line-number\" data-line-number=\"7\"><\/td>\n        <td id=\"file-topic7_2-py-LC7\" class=\"blob-code blob-code-inner js-file-line\">                                                    <span class=\"pl-v\">stratify<\/span><span class=\"pl-k\">=<\/span>y, <\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic7_2-py-L8\" class=\"blob-num js-line-number\" data-line-number=\"8\"><\/td>\n        <td id=\"file-topic7_2-py-LC8\" class=\"blob-code blob-code-inner js-file-line\">                                                    <span class=\"pl-v\">random_state<\/span><span class=\"pl-k\">=<\/span><span class=\"pl-c1\">42<\/span>)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic7_2-py-L9\" class=\"blob-num js-line-number\" data-line-number=\"9\"><\/td>\n        <td id=\"file-topic7_2-py-LC9\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic7_2-py-L10\" class=\"blob-num js-line-number\" data-line-number=\"10\"><\/td>\n        <td id=\"file-topic7_2-py-LC10\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c\"><span class=\"pl-c\">#<\/span> Decision trees with depth = 2<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic7_2-py-L11\" class=\"blob-num js-line-number\" data-line-number=\"11\"><\/td>\n        <td id=\"file-topic7_2-py-LC11\" class=\"blob-code blob-code-inner js-file-line\">clf <span class=\"pl-k\">=<\/span> DecisionTreeClassifier(<span class=\"pl-v\">max_depth<\/span><span class=\"pl-k\">=<\/span><span class=\"pl-c1\">2<\/span>, <span class=\"pl-v\">random_state<\/span><span class=\"pl-k\">=<\/span><span class=\"pl-c1\">42<\/span>)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic7_2-py-L12\" class=\"blob-num js-line-number\" data-line-number=\"12\"><\/td>\n        <td id=\"file-topic7_2-py-LC12\" class=\"blob-code blob-code-inner js-file-line\">clf.fit(X_train, y_train)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic7_2-py-L13\" class=\"blob-num js-line-number\" data-line-number=\"13\"><\/td>\n        <td id=\"file-topic7_2-py-LC13\" class=\"blob-code blob-code-inner js-file-line\">preds <span class=\"pl-k\">=<\/span> clf.predict_proba(X_test)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic7_2-py-L14\" class=\"blob-num js-line-number\" data-line-number=\"14\"><\/td>\n        <td id=\"file-topic7_2-py-LC14\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c1\">print<\/span>(<span class=\"pl-s\"><span class=\"pl-pds\">&#39;<\/span>Accuracy: <span class=\"pl-c1\">{<span class=\"pl-k\">:.5f<\/span>}<\/span><span class=\"pl-pds\">&#39;<\/span><\/span>.format(accuracy_score(y_test, <\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic7_2-py-L15\" class=\"blob-num js-line-number\" data-line-number=\"15\"><\/td>\n        <td id=\"file-topic7_2-py-LC15\" class=\"blob-code blob-code-inner js-file-line\">                                                preds.argmax(<span class=\"pl-v\">axis<\/span><span class=\"pl-k\">=<\/span><span class=\"pl-c1\">1<\/span>))))<\/td>\n      <\/tr>\n<\/table>\n\n\n  <\/div>\n\n  <\/div>\n<\/div>\n\n      <\/div>\n      <div class=\"gist-meta\">\n        <a href=\"https://gist.github.com/libfun/5eb5908ddcccf4a450d54927e4f9768c/raw/f5c0855852f3c3324d0b8676bb28bba06e42d228/topic7_2.py\" style=\"float:right\">view raw<\/a>\n        <a href=\"https://gist.github.com/libfun/5eb5908ddcccf4a450d54927e4f9768c#file-topic7_2-py\">topic7_2.py<\/a>\n        hosted with &#10084; by <a href=\"https://github.com\">GitHub<\/a>\n      <\/div>\n    <\/div>\n<\/div>\n')