document.write('<link rel="stylesheet" href="https://assets-cdn.github.com/assets/gist-embed-6364c832764ba9bc85e4566bd747f0d1.css">')
document.write('<div id=\"gist87922403\" class=\"gist\">\n    <div class=\"gist-file\">\n      <div class=\"gist-data\">\n        <div class=\"js-gist-file-update-container js-task-list-container file-box\">\n  <div id=\"file-topic3_snippet8-py\" class=\"file\">\n    \n\n  <div itemprop=\"text\" class=\"blob-wrapper data type-python\">\n      <table class=\"highlight tab-size js-file-line-container\" data-tab-size=\"8\">\n      <tr>\n        <td id=\"file-topic3_snippet8-py-L1\" class=\"blob-num js-line-number\" data-line-number=\"1\"><\/td>\n        <td id=\"file-topic3_snippet8-py-LC1\" class=\"blob-code blob-code-inner js-file-line\">age_sal_tree <span class=\"pl-k\">=<\/span> DecisionTreeClassifier(<span class=\"pl-v\">random_state<\/span><span class=\"pl-k\">=<\/span><span class=\"pl-c1\">17<\/span>)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic3_snippet8-py-L2\" class=\"blob-num js-line-number\" data-line-number=\"2\"><\/td>\n        <td id=\"file-topic3_snippet8-py-LC2\" class=\"blob-code blob-code-inner js-file-line\">age_sal_tree.fit(data2[[<span class=\"pl-s\"><span class=\"pl-pds\">&#39;<\/span>Age<span class=\"pl-pds\">&#39;<\/span><\/span>, <span class=\"pl-s\"><span class=\"pl-pds\">&#39;<\/span>Salary<span class=\"pl-pds\">&#39;<\/span><\/span>]].values, data2[<span class=\"pl-s\"><span class=\"pl-pds\">&#39;<\/span>Loan Default<span class=\"pl-pds\">&#39;<\/span><\/span>].values)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic3_snippet8-py-L3\" class=\"blob-num js-line-number\" data-line-number=\"3\"><\/td>\n        <td id=\"file-topic3_snippet8-py-LC3\" class=\"blob-code blob-code-inner js-file-line\">dot_data <span class=\"pl-k\">=<\/span> StringIO()<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic3_snippet8-py-L4\" class=\"blob-num js-line-number\" data-line-number=\"4\"><\/td>\n        <td id=\"file-topic3_snippet8-py-LC4\" class=\"blob-code blob-code-inner js-file-line\">export_graphviz(age_sal_tree, <span class=\"pl-v\">feature_names<\/span><span class=\"pl-k\">=<\/span>[<span class=\"pl-s\"><span class=\"pl-pds\">&#39;<\/span>Age<span class=\"pl-pds\">&#39;<\/span><\/span>, <span class=\"pl-s\"><span class=\"pl-pds\">&#39;<\/span>Salary<span class=\"pl-pds\">&#39;<\/span><\/span>], <\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic3_snippet8-py-L5\" class=\"blob-num js-line-number\" data-line-number=\"5\"><\/td>\n        <td id=\"file-topic3_snippet8-py-LC5\" class=\"blob-code blob-code-inner js-file-line\">                <span class=\"pl-v\">out_file<\/span><span class=\"pl-k\">=<\/span>dot_data, <span class=\"pl-v\">filled<\/span><span class=\"pl-k\">=<\/span><span class=\"pl-c1\">True<\/span>)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic3_snippet8-py-L6\" class=\"blob-num js-line-number\" data-line-number=\"6\"><\/td>\n        <td id=\"file-topic3_snippet8-py-LC6\" class=\"blob-code blob-code-inner js-file-line\">graph <span class=\"pl-k\">=<\/span> pydotplus.graph_from_dot_data(dot_data.getvalue())<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic3_snippet8-py-L7\" class=\"blob-num js-line-number\" data-line-number=\"7\"><\/td>\n        <td id=\"file-topic3_snippet8-py-LC7\" class=\"blob-code blob-code-inner js-file-line\">Image(<span class=\"pl-v\">value<\/span><span class=\"pl-k\">=<\/span>graph.create_png())<\/td>\n      <\/tr>\n<\/table>\n\n\n  <\/div>\n\n  <\/div>\n<\/div>\n\n      <\/div>\n      <div class=\"gist-meta\">\n        <a href=\"https://gist.github.com/Yorko/97c9c27dcea7a227d7f44801f08a68c7/raw/9d680d753221e8050f08e5f858eafec0d7933eda/topic3_snippet8.py\" style=\"float:right\">view raw<\/a>\n        <a href=\"https://gist.github.com/Yorko/97c9c27dcea7a227d7f44801f08a68c7#file-topic3_snippet8-py\">topic3_snippet8.py<\/a>\n        hosted with &#10084; by <a href=\"https://github.com\">GitHub<\/a>\n      <\/div>\n    <\/div>\n<\/div>\n')
