document.write('<link rel="stylesheet" href="https://github.githubassets.com/assets/gist-embed-4e8330898d16b1b65e7f0856076a5a28.css">')
document.write('<div id=\"gist82173253\" class=\"gist\">\n    <div class=\"gist-file\">\n      <div class=\"gist-data\">\n        <div class=\"js-gist-file-update-container js-task-list-container file-box\">\n  <div id=\"file-vae-py\" class=\"file\">\n    \n\n  <div itemprop=\"text\" class=\"Box-body p-0 blob-wrapper data type-python \">\n      \n<table class=\"highlight tab-size js-file-line-container\" data-tab-size=\"8\">\n      <tr>\n        <td id=\"file-vae-py-L1\" class=\"blob-num js-line-number\" data-line-number=\"1\"><\/td>\n        <td id=\"file-vae-py-LC1\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-k\">def<\/span> <span class=\"pl-en\">encoder<\/span>(<span class=\"pl-smi\">X_in<\/span>, <span class=\"pl-smi\">keep_prob<\/span>):<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-vae-py-L2\" class=\"blob-num js-line-number\" data-line-number=\"2\"><\/td>\n        <td id=\"file-vae-py-LC2\" class=\"blob-code blob-code-inner js-file-line\">    activation <span class=\"pl-k\">=<\/span> lrelu<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-vae-py-L3\" class=\"blob-num js-line-number\" data-line-number=\"3\"><\/td>\n        <td id=\"file-vae-py-LC3\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-k\">with<\/span> tf.variable_scope(<span class=\"pl-s\"><span class=\"pl-pds\">&quot;<\/span>encoder<span class=\"pl-pds\">&quot;<\/span><\/span>, <span class=\"pl-v\">reuse<\/span><span class=\"pl-k\">=<\/span><span class=\"pl-c1\">None<\/span>):<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-vae-py-L4\" class=\"blob-num js-line-number\" data-line-number=\"4\"><\/td>\n        <td id=\"file-vae-py-LC4\" class=\"blob-code blob-code-inner js-file-line\">        X <span class=\"pl-k\">=<\/span> tf.reshape(X_in, <span class=\"pl-v\">shape<\/span><span class=\"pl-k\">=<\/span>[<span class=\"pl-k\">-<\/span><span class=\"pl-c1\">1<\/span>, <span class=\"pl-c1\">28<\/span>, <span class=\"pl-c1\">28<\/span>, <span class=\"pl-c1\">1<\/span>])<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-vae-py-L5\" class=\"blob-num js-line-number\" data-line-number=\"5\"><\/td>\n        <td id=\"file-vae-py-LC5\" class=\"blob-code blob-code-inner js-file-line\">        x <span class=\"pl-k\">=<\/span> tf.layers.conv2d(X, <span class=\"pl-v\">filters<\/span><span class=\"pl-k\">=<\/span><span class=\"pl-c1\">64<\/span>, <span class=\"pl-v\">kernel_size<\/span><span class=\"pl-k\">=<\/span><span class=\"pl-c1\">4<\/span>, <span class=\"pl-v\">strides<\/span><span class=\"pl-k\">=<\/span><span class=\"pl-c1\">2<\/span>, <span class=\"pl-v\">padding<\/span><span class=\"pl-k\">=<\/span><span class=\"pl-s\"><span class=\"pl-pds\">&#39;<\/span>same<span class=\"pl-pds\">&#39;<\/span><\/span>, <span class=\"pl-v\">activation<\/span><span class=\"pl-k\">=<\/span>activation)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-vae-py-L6\" class=\"blob-num js-line-number\" data-line-number=\"6\"><\/td>\n        <td id=\"file-vae-py-LC6\" class=\"blob-code blob-code-inner js-file-line\">        x <span class=\"pl-k\">=<\/span> tf.nn.dropout(x, keep_prob)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-vae-py-L7\" class=\"blob-num js-line-number\" data-line-number=\"7\"><\/td>\n        <td id=\"file-vae-py-LC7\" class=\"blob-code blob-code-inner js-file-line\">        x <span class=\"pl-k\">=<\/span> tf.layers.conv2d(x, <span class=\"pl-v\">filters<\/span><span class=\"pl-k\">=<\/span><span class=\"pl-c1\">64<\/span>, <span class=\"pl-v\">kernel_size<\/span><span class=\"pl-k\">=<\/span><span class=\"pl-c1\">4<\/span>, <span class=\"pl-v\">strides<\/span><span class=\"pl-k\">=<\/span><span class=\"pl-c1\">2<\/span>, <span class=\"pl-v\">padding<\/span><span class=\"pl-k\">=<\/span><span class=\"pl-s\"><span class=\"pl-pds\">&#39;<\/span>same<span class=\"pl-pds\">&#39;<\/span><\/span>, <span class=\"pl-v\">activation<\/span><span class=\"pl-k\">=<\/span>activation)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-vae-py-L8\" class=\"blob-num js-line-number\" data-line-number=\"8\"><\/td>\n        <td id=\"file-vae-py-LC8\" class=\"blob-code blob-code-inner js-file-line\">        x <span class=\"pl-k\">=<\/span> tf.nn.dropout(x, keep_prob)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-vae-py-L9\" class=\"blob-num js-line-number\" data-line-number=\"9\"><\/td>\n        <td id=\"file-vae-py-LC9\" class=\"blob-code blob-code-inner js-file-line\">        x <span class=\"pl-k\">=<\/span> tf.layers.conv2d(x, <span class=\"pl-v\">filters<\/span><span class=\"pl-k\">=<\/span><span class=\"pl-c1\">64<\/span>, <span class=\"pl-v\">kernel_size<\/span><span class=\"pl-k\">=<\/span><span class=\"pl-c1\">4<\/span>, <span class=\"pl-v\">strides<\/span><span class=\"pl-k\">=<\/span><span class=\"pl-c1\">1<\/span>, <span class=\"pl-v\">padding<\/span><span class=\"pl-k\">=<\/span><span class=\"pl-s\"><span class=\"pl-pds\">&#39;<\/span>same<span class=\"pl-pds\">&#39;<\/span><\/span>, <span class=\"pl-v\">activation<\/span><span class=\"pl-k\">=<\/span>activation)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-vae-py-L10\" class=\"blob-num js-line-number\" data-line-number=\"10\"><\/td>\n        <td id=\"file-vae-py-LC10\" class=\"blob-code blob-code-inner js-file-line\">        x <span class=\"pl-k\">=<\/span> tf.nn.dropout(x, keep_prob)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-vae-py-L11\" class=\"blob-num js-line-number\" data-line-number=\"11\"><\/td>\n        <td id=\"file-vae-py-LC11\" class=\"blob-code blob-code-inner js-file-line\">        x <span class=\"pl-k\">=<\/span> tf.contrib.layers.flatten(x)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-vae-py-L12\" class=\"blob-num js-line-number\" data-line-number=\"12\"><\/td>\n        <td id=\"file-vae-py-LC12\" class=\"blob-code blob-code-inner js-file-line\">        mn <span class=\"pl-k\">=<\/span> tf.layers.dense(x, <span class=\"pl-v\">units<\/span><span class=\"pl-k\">=<\/span>n_latent)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-vae-py-L13\" class=\"blob-num js-line-number\" data-line-number=\"13\"><\/td>\n        <td id=\"file-vae-py-LC13\" class=\"blob-code blob-code-inner js-file-line\">        sd       <span class=\"pl-k\">=<\/span> <span class=\"pl-c1\">0.5<\/span> <span class=\"pl-k\">*<\/span> tf.layers.dense(x, <span class=\"pl-v\">units<\/span><span class=\"pl-k\">=<\/span>n_latent)            <\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-vae-py-L14\" class=\"blob-num js-line-number\" data-line-number=\"14\"><\/td>\n        <td id=\"file-vae-py-LC14\" class=\"blob-code blob-code-inner js-file-line\">        epsilon <span class=\"pl-k\">=<\/span> tf.random_normal(tf.stack([tf.shape(x)[<span class=\"pl-c1\">0<\/span>], n_latent])) <\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-vae-py-L15\" class=\"blob-num js-line-number\" data-line-number=\"15\"><\/td>\n        <td id=\"file-vae-py-LC15\" class=\"blob-code blob-code-inner js-file-line\">        z  <span class=\"pl-k\">=<\/span> mn <span class=\"pl-k\">+<\/span> tf.multiply(epsilon, tf.exp(sd))<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-vae-py-L16\" class=\"blob-num js-line-number\" data-line-number=\"16\"><\/td>\n        <td id=\"file-vae-py-LC16\" class=\"blob-code blob-code-inner js-file-line\">        <\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-vae-py-L17\" class=\"blob-num js-line-number\" data-line-number=\"17\"><\/td>\n        <td id=\"file-vae-py-LC17\" class=\"blob-code blob-code-inner js-file-line\">        <span class=\"pl-k\">return<\/span> z, mn, sd<\/td>\n      <\/tr>\n<\/table>\n\n\n  <\/div>\n\n  <\/div>\n<\/div>\n\n      <\/div>\n      <div class=\"gist-meta\">\n        <a href=\"https://gist.github.com/FelixMohr/29e1d5b1f3fd1b6374dfd3b68c2cdbac/raw/d487d69fa52362dec40b3b0705861f13fd945072/vae.py\" style=\"float:right\">view raw<\/a>\n        <a href=\"https://gist.github.com/FelixMohr/29e1d5b1f3fd1b6374dfd3b68c2cdbac#file-vae-py\">vae.py<\/a>\n        hosted with &#10084; by <a href=\"https://github.com\">GitHub<\/a>\n      <\/div>\n    <\/div>\n<\/div>\n')
