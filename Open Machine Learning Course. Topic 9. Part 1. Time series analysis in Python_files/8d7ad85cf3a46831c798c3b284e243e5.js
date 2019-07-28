document.write('<link rel="stylesheet" href="https://assets-cdn.github.com/assets/gist-embed-8c6ade0d3779da026346afb9bf324f67.css">')
document.write('<div id=\"gist88900452\" class=\"gist\">\n    <div class=\"gist-file\">\n      <div class=\"gist-data\">\n        <div class=\"js-gist-file-update-container js-task-list-container file-box\">\n  <div id=\"file-topic9_preprocess_pipeline-py\" class=\"file\">\n    \n\n  <div itemprop=\"text\" class=\"blob-wrapper data type-python\">\n      <table class=\"highlight tab-size js-file-line-container\" data-tab-size=\"8\">\n      <tr>\n        <td id=\"file-topic9_preprocess_pipeline-py-L1\" class=\"blob-num js-line-number\" data-line-number=\"1\"><\/td>\n        <td id=\"file-topic9_preprocess_pipeline-py-LC1\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-k\">def<\/span> <span class=\"pl-en\">prepareData<\/span>(<span class=\"pl-smi\">series<\/span>, <span class=\"pl-smi\">lag_start<\/span>, <span class=\"pl-smi\">lag_end<\/span>, <span class=\"pl-smi\">test_size<\/span>, <span class=\"pl-smi\">target_encoding<\/span><span class=\"pl-k\">=<\/span><span class=\"pl-c1\">False<\/span>):<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_preprocess_pipeline-py-L2\" class=\"blob-num js-line-number\" data-line-number=\"2\"><\/td>\n        <td id=\"file-topic9_preprocess_pipeline-py-LC2\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-s\"><span class=\"pl-pds\">&quot;&quot;&quot;<\/span><\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_preprocess_pipeline-py-L3\" class=\"blob-num js-line-number\" data-line-number=\"3\"><\/td>\n        <td id=\"file-topic9_preprocess_pipeline-py-LC3\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-s\">        series: pd.DataFrame<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_preprocess_pipeline-py-L4\" class=\"blob-num js-line-number\" data-line-number=\"4\"><\/td>\n        <td id=\"file-topic9_preprocess_pipeline-py-LC4\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-s\">            dataframe with timeseries<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_preprocess_pipeline-py-L5\" class=\"blob-num js-line-number\" data-line-number=\"5\"><\/td>\n        <td id=\"file-topic9_preprocess_pipeline-py-LC5\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-s\"><\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_preprocess_pipeline-py-L6\" class=\"blob-num js-line-number\" data-line-number=\"6\"><\/td>\n        <td id=\"file-topic9_preprocess_pipeline-py-LC6\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-s\">        lag_start: int<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_preprocess_pipeline-py-L7\" class=\"blob-num js-line-number\" data-line-number=\"7\"><\/td>\n        <td id=\"file-topic9_preprocess_pipeline-py-LC7\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-s\">            initial step back in time to slice target variable <\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_preprocess_pipeline-py-L8\" class=\"blob-num js-line-number\" data-line-number=\"8\"><\/td>\n        <td id=\"file-topic9_preprocess_pipeline-py-LC8\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-s\">            example - lag_start = 1 means that the model <\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_preprocess_pipeline-py-L9\" class=\"blob-num js-line-number\" data-line-number=\"9\"><\/td>\n        <td id=\"file-topic9_preprocess_pipeline-py-LC9\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-s\">                      will see yesterday&#39;s values to predict today<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_preprocess_pipeline-py-L10\" class=\"blob-num js-line-number\" data-line-number=\"10\"><\/td>\n        <td id=\"file-topic9_preprocess_pipeline-py-LC10\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-s\"><\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_preprocess_pipeline-py-L11\" class=\"blob-num js-line-number\" data-line-number=\"11\"><\/td>\n        <td id=\"file-topic9_preprocess_pipeline-py-LC11\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-s\">        lag_end: int<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_preprocess_pipeline-py-L12\" class=\"blob-num js-line-number\" data-line-number=\"12\"><\/td>\n        <td id=\"file-topic9_preprocess_pipeline-py-LC12\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-s\">            final step back in time to slice target variable<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_preprocess_pipeline-py-L13\" class=\"blob-num js-line-number\" data-line-number=\"13\"><\/td>\n        <td id=\"file-topic9_preprocess_pipeline-py-LC13\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-s\">            example - lag_end = 4 means that the model <\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_preprocess_pipeline-py-L14\" class=\"blob-num js-line-number\" data-line-number=\"14\"><\/td>\n        <td id=\"file-topic9_preprocess_pipeline-py-LC14\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-s\">                      will see up to 4 days back in time to predict today<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_preprocess_pipeline-py-L15\" class=\"blob-num js-line-number\" data-line-number=\"15\"><\/td>\n        <td id=\"file-topic9_preprocess_pipeline-py-LC15\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-s\"><\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_preprocess_pipeline-py-L16\" class=\"blob-num js-line-number\" data-line-number=\"16\"><\/td>\n        <td id=\"file-topic9_preprocess_pipeline-py-LC16\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-s\">        test_size: float<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_preprocess_pipeline-py-L17\" class=\"blob-num js-line-number\" data-line-number=\"17\"><\/td>\n        <td id=\"file-topic9_preprocess_pipeline-py-LC17\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-s\">            size of the test dataset after train/test split as percentage of dataset<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_preprocess_pipeline-py-L18\" class=\"blob-num js-line-number\" data-line-number=\"18\"><\/td>\n        <td id=\"file-topic9_preprocess_pipeline-py-LC18\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-s\"><\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_preprocess_pipeline-py-L19\" class=\"blob-num js-line-number\" data-line-number=\"19\"><\/td>\n        <td id=\"file-topic9_preprocess_pipeline-py-LC19\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-s\">        target_encoding: boolean<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_preprocess_pipeline-py-L20\" class=\"blob-num js-line-number\" data-line-number=\"20\"><\/td>\n        <td id=\"file-topic9_preprocess_pipeline-py-LC20\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-s\">            if True - add target averages to the dataset<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_preprocess_pipeline-py-L21\" class=\"blob-num js-line-number\" data-line-number=\"21\"><\/td>\n        <td id=\"file-topic9_preprocess_pipeline-py-LC21\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-s\">        <\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_preprocess_pipeline-py-L22\" class=\"blob-num js-line-number\" data-line-number=\"22\"><\/td>\n        <td id=\"file-topic9_preprocess_pipeline-py-LC22\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-s\">    <span class=\"pl-pds\">&quot;&quot;&quot;<\/span><\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_preprocess_pipeline-py-L23\" class=\"blob-num js-line-number\" data-line-number=\"23\"><\/td>\n        <td id=\"file-topic9_preprocess_pipeline-py-LC23\" class=\"blob-code blob-code-inner js-file-line\">    <\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_preprocess_pipeline-py-L24\" class=\"blob-num js-line-number\" data-line-number=\"24\"><\/td>\n        <td id=\"file-topic9_preprocess_pipeline-py-LC24\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-c\"><span class=\"pl-c\">#<\/span> copy of the initial dataset<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_preprocess_pipeline-py-L25\" class=\"blob-num js-line-number\" data-line-number=\"25\"><\/td>\n        <td id=\"file-topic9_preprocess_pipeline-py-LC25\" class=\"blob-code blob-code-inner js-file-line\">    data <span class=\"pl-k\">=<\/span> pd.DataFrame(series.copy())<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_preprocess_pipeline-py-L26\" class=\"blob-num js-line-number\" data-line-number=\"26\"><\/td>\n        <td id=\"file-topic9_preprocess_pipeline-py-LC26\" class=\"blob-code blob-code-inner js-file-line\">    data.columns <span class=\"pl-k\">=<\/span> [<span class=\"pl-s\"><span class=\"pl-pds\">&quot;<\/span>y<span class=\"pl-pds\">&quot;<\/span><\/span>]<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_preprocess_pipeline-py-L27\" class=\"blob-num js-line-number\" data-line-number=\"27\"><\/td>\n        <td id=\"file-topic9_preprocess_pipeline-py-LC27\" class=\"blob-code blob-code-inner js-file-line\">    <\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_preprocess_pipeline-py-L28\" class=\"blob-num js-line-number\" data-line-number=\"28\"><\/td>\n        <td id=\"file-topic9_preprocess_pipeline-py-LC28\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-c\"><span class=\"pl-c\">#<\/span> lags of series<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_preprocess_pipeline-py-L29\" class=\"blob-num js-line-number\" data-line-number=\"29\"><\/td>\n        <td id=\"file-topic9_preprocess_pipeline-py-LC29\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-k\">for<\/span> i <span class=\"pl-k\">in<\/span> <span class=\"pl-c1\">range<\/span>(lag_start, lag_end):<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_preprocess_pipeline-py-L30\" class=\"blob-num js-line-number\" data-line-number=\"30\"><\/td>\n        <td id=\"file-topic9_preprocess_pipeline-py-LC30\" class=\"blob-code blob-code-inner js-file-line\">        data[<span class=\"pl-s\"><span class=\"pl-pds\">&quot;<\/span>lag_<span class=\"pl-c1\">{}<\/span><span class=\"pl-pds\">&quot;<\/span><\/span>.format(i)] <span class=\"pl-k\">=<\/span> data.y.shift(i)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_preprocess_pipeline-py-L31\" class=\"blob-num js-line-number\" data-line-number=\"31\"><\/td>\n        <td id=\"file-topic9_preprocess_pipeline-py-LC31\" class=\"blob-code blob-code-inner js-file-line\">    <\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_preprocess_pipeline-py-L32\" class=\"blob-num js-line-number\" data-line-number=\"32\"><\/td>\n        <td id=\"file-topic9_preprocess_pipeline-py-LC32\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-c\"><span class=\"pl-c\">#<\/span> datetime features<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_preprocess_pipeline-py-L33\" class=\"blob-num js-line-number\" data-line-number=\"33\"><\/td>\n        <td id=\"file-topic9_preprocess_pipeline-py-LC33\" class=\"blob-code blob-code-inner js-file-line\">    data.index <span class=\"pl-k\">=<\/span> data.index.to_datetime()<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_preprocess_pipeline-py-L34\" class=\"blob-num js-line-number\" data-line-number=\"34\"><\/td>\n        <td id=\"file-topic9_preprocess_pipeline-py-LC34\" class=\"blob-code blob-code-inner js-file-line\">    data[<span class=\"pl-s\"><span class=\"pl-pds\">&quot;<\/span>hour<span class=\"pl-pds\">&quot;<\/span><\/span>] <span class=\"pl-k\">=<\/span> data.index.hour<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_preprocess_pipeline-py-L35\" class=\"blob-num js-line-number\" data-line-number=\"35\"><\/td>\n        <td id=\"file-topic9_preprocess_pipeline-py-LC35\" class=\"blob-code blob-code-inner js-file-line\">    data[<span class=\"pl-s\"><span class=\"pl-pds\">&quot;<\/span>weekday<span class=\"pl-pds\">&quot;<\/span><\/span>] <span class=\"pl-k\">=<\/span> data.index.weekday<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_preprocess_pipeline-py-L36\" class=\"blob-num js-line-number\" data-line-number=\"36\"><\/td>\n        <td id=\"file-topic9_preprocess_pipeline-py-LC36\" class=\"blob-code blob-code-inner js-file-line\">    data[<span class=\"pl-s\"><span class=\"pl-pds\">&#39;<\/span>is_weekend<span class=\"pl-pds\">&#39;<\/span><\/span>] <span class=\"pl-k\">=<\/span> data.weekday.isin([<span class=\"pl-c1\">5<\/span>,<span class=\"pl-c1\">6<\/span>])<span class=\"pl-k\">*<\/span><span class=\"pl-c1\">1<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_preprocess_pipeline-py-L37\" class=\"blob-num js-line-number\" data-line-number=\"37\"><\/td>\n        <td id=\"file-topic9_preprocess_pipeline-py-LC37\" class=\"blob-code blob-code-inner js-file-line\">    <\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_preprocess_pipeline-py-L38\" class=\"blob-num js-line-number\" data-line-number=\"38\"><\/td>\n        <td id=\"file-topic9_preprocess_pipeline-py-LC38\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-k\">if<\/span> target_encoding:<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_preprocess_pipeline-py-L39\" class=\"blob-num js-line-number\" data-line-number=\"39\"><\/td>\n        <td id=\"file-topic9_preprocess_pipeline-py-LC39\" class=\"blob-code blob-code-inner js-file-line\">        <span class=\"pl-c\"><span class=\"pl-c\">#<\/span> calculate averages on train set only<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_preprocess_pipeline-py-L40\" class=\"blob-num js-line-number\" data-line-number=\"40\"><\/td>\n        <td id=\"file-topic9_preprocess_pipeline-py-LC40\" class=\"blob-code blob-code-inner js-file-line\">        test_index <span class=\"pl-k\">=<\/span> <span class=\"pl-c1\">int<\/span>(<span class=\"pl-c1\">len<\/span>(data.dropna())<span class=\"pl-k\">*<\/span>(<span class=\"pl-c1\">1<\/span><span class=\"pl-k\">-<\/span>test_size))<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_preprocess_pipeline-py-L41\" class=\"blob-num js-line-number\" data-line-number=\"41\"><\/td>\n        <td id=\"file-topic9_preprocess_pipeline-py-LC41\" class=\"blob-code blob-code-inner js-file-line\">        data[<span class=\"pl-s\"><span class=\"pl-pds\">&#39;<\/span>weekday_average<span class=\"pl-pds\">&#39;<\/span><\/span>] <span class=\"pl-k\">=<\/span> <span class=\"pl-c1\">list<\/span>(<span class=\"pl-c1\">map<\/span>(<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_preprocess_pipeline-py-L42\" class=\"blob-num js-line-number\" data-line-number=\"42\"><\/td>\n        <td id=\"file-topic9_preprocess_pipeline-py-LC42\" class=\"blob-code blob-code-inner js-file-line\">            code_mean(data[:test_index], <span class=\"pl-s\"><span class=\"pl-pds\">&#39;<\/span>weekday<span class=\"pl-pds\">&#39;<\/span><\/span>, <span class=\"pl-s\"><span class=\"pl-pds\">&quot;<\/span>y<span class=\"pl-pds\">&quot;<\/span><\/span>).get, data.weekday))<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_preprocess_pipeline-py-L43\" class=\"blob-num js-line-number\" data-line-number=\"43\"><\/td>\n        <td id=\"file-topic9_preprocess_pipeline-py-LC43\" class=\"blob-code blob-code-inner js-file-line\">        data[<span class=\"pl-s\"><span class=\"pl-pds\">&quot;<\/span>hour_average<span class=\"pl-pds\">&quot;<\/span><\/span>] <span class=\"pl-k\">=<\/span> <span class=\"pl-c1\">list<\/span>(<span class=\"pl-c1\">map<\/span>(<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_preprocess_pipeline-py-L44\" class=\"blob-num js-line-number\" data-line-number=\"44\"><\/td>\n        <td id=\"file-topic9_preprocess_pipeline-py-LC44\" class=\"blob-code blob-code-inner js-file-line\">            code_mean(data[:test_index], <span class=\"pl-s\"><span class=\"pl-pds\">&#39;<\/span>hour<span class=\"pl-pds\">&#39;<\/span><\/span>, <span class=\"pl-s\"><span class=\"pl-pds\">&quot;<\/span>y<span class=\"pl-pds\">&quot;<\/span><\/span>).get, data.hour))<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_preprocess_pipeline-py-L45\" class=\"blob-num js-line-number\" data-line-number=\"45\"><\/td>\n        <td id=\"file-topic9_preprocess_pipeline-py-LC45\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_preprocess_pipeline-py-L46\" class=\"blob-num js-line-number\" data-line-number=\"46\"><\/td>\n        <td id=\"file-topic9_preprocess_pipeline-py-LC46\" class=\"blob-code blob-code-inner js-file-line\">        <span class=\"pl-c\"><span class=\"pl-c\">#<\/span> frop encoded variables <\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_preprocess_pipeline-py-L47\" class=\"blob-num js-line-number\" data-line-number=\"47\"><\/td>\n        <td id=\"file-topic9_preprocess_pipeline-py-LC47\" class=\"blob-code blob-code-inner js-file-line\">        data.drop([<span class=\"pl-s\"><span class=\"pl-pds\">&quot;<\/span>hour<span class=\"pl-pds\">&quot;<\/span><\/span>, <span class=\"pl-s\"><span class=\"pl-pds\">&quot;<\/span>weekday<span class=\"pl-pds\">&quot;<\/span><\/span>], <span class=\"pl-v\">axis<\/span><span class=\"pl-k\">=<\/span><span class=\"pl-c1\">1<\/span>, <span class=\"pl-v\">inplace<\/span><span class=\"pl-k\">=<\/span><span class=\"pl-c1\">True<\/span>)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_preprocess_pipeline-py-L48\" class=\"blob-num js-line-number\" data-line-number=\"48\"><\/td>\n        <td id=\"file-topic9_preprocess_pipeline-py-LC48\" class=\"blob-code blob-code-inner js-file-line\">    <\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_preprocess_pipeline-py-L49\" class=\"blob-num js-line-number\" data-line-number=\"49\"><\/td>\n        <td id=\"file-topic9_preprocess_pipeline-py-LC49\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-c\"><span class=\"pl-c\">#<\/span> train-test split<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_preprocess_pipeline-py-L50\" class=\"blob-num js-line-number\" data-line-number=\"50\"><\/td>\n        <td id=\"file-topic9_preprocess_pipeline-py-LC50\" class=\"blob-code blob-code-inner js-file-line\">    y <span class=\"pl-k\">=<\/span> data.dropna().y<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_preprocess_pipeline-py-L51\" class=\"blob-num js-line-number\" data-line-number=\"51\"><\/td>\n        <td id=\"file-topic9_preprocess_pipeline-py-LC51\" class=\"blob-code blob-code-inner js-file-line\">    X <span class=\"pl-k\">=<\/span> data.dropna().drop([<span class=\"pl-s\"><span class=\"pl-pds\">&#39;<\/span>y<span class=\"pl-pds\">&#39;<\/span><\/span>], <span class=\"pl-v\">axis<\/span><span class=\"pl-k\">=<\/span><span class=\"pl-c1\">1<\/span>)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_preprocess_pipeline-py-L52\" class=\"blob-num js-line-number\" data-line-number=\"52\"><\/td>\n        <td id=\"file-topic9_preprocess_pipeline-py-LC52\" class=\"blob-code blob-code-inner js-file-line\">    X_train, X_test, y_train, y_test <span class=\"pl-k\">=<\/span>\\<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_preprocess_pipeline-py-L53\" class=\"blob-num js-line-number\" data-line-number=\"53\"><\/td>\n        <td id=\"file-topic9_preprocess_pipeline-py-LC53\" class=\"blob-code blob-code-inner js-file-line\">    timeseries_train_test_split(X, y, <span class=\"pl-v\">test_size<\/span><span class=\"pl-k\">=<\/span>test_size)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_preprocess_pipeline-py-L54\" class=\"blob-num js-line-number\" data-line-number=\"54\"><\/td>\n        <td id=\"file-topic9_preprocess_pipeline-py-LC54\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_preprocess_pipeline-py-L55\" class=\"blob-num js-line-number\" data-line-number=\"55\"><\/td>\n        <td id=\"file-topic9_preprocess_pipeline-py-LC55\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-k\">return<\/span> X_train, X_test, y_train, y_test<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_preprocess_pipeline-py-L56\" class=\"blob-num js-line-number\" data-line-number=\"56\"><\/td>\n        <td id=\"file-topic9_preprocess_pipeline-py-LC56\" class=\"blob-code blob-code-inner js-file-line\">  <\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_preprocess_pipeline-py-L57\" class=\"blob-num js-line-number\" data-line-number=\"57\"><\/td>\n        <td id=\"file-topic9_preprocess_pipeline-py-LC57\" class=\"blob-code blob-code-inner js-file-line\">  <\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_preprocess_pipeline-py-L58\" class=\"blob-num js-line-number\" data-line-number=\"58\"><\/td>\n        <td id=\"file-topic9_preprocess_pipeline-py-LC58\" class=\"blob-code blob-code-inner js-file-line\">X_train, X_test, y_train, y_test <span class=\"pl-k\">=<\/span>\\<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_preprocess_pipeline-py-L59\" class=\"blob-num js-line-number\" data-line-number=\"59\"><\/td>\n        <td id=\"file-topic9_preprocess_pipeline-py-LC59\" class=\"blob-code blob-code-inner js-file-line\">prepareData(ads.Ads, <span class=\"pl-v\">lag_start<\/span><span class=\"pl-k\">=<\/span><span class=\"pl-c1\">6<\/span>, <span class=\"pl-v\">lag_end<\/span><span class=\"pl-k\">=<\/span><span class=\"pl-c1\">25<\/span>, <span class=\"pl-v\">test_size<\/span><span class=\"pl-k\">=<\/span><span class=\"pl-c1\">0.3<\/span>, <span class=\"pl-v\">target_encoding<\/span><span class=\"pl-k\">=<\/span><span class=\"pl-c1\">True<\/span>)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_preprocess_pipeline-py-L60\" class=\"blob-num js-line-number\" data-line-number=\"60\"><\/td>\n        <td id=\"file-topic9_preprocess_pipeline-py-LC60\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_preprocess_pipeline-py-L61\" class=\"blob-num js-line-number\" data-line-number=\"61\"><\/td>\n        <td id=\"file-topic9_preprocess_pipeline-py-LC61\" class=\"blob-code blob-code-inner js-file-line\">X_train_scaled <span class=\"pl-k\">=<\/span> scaler.fit_transform(X_train)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_preprocess_pipeline-py-L62\" class=\"blob-num js-line-number\" data-line-number=\"62\"><\/td>\n        <td id=\"file-topic9_preprocess_pipeline-py-LC62\" class=\"blob-code blob-code-inner js-file-line\">X_test_scaled <span class=\"pl-k\">=<\/span> scaler.transform(X_test)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_preprocess_pipeline-py-L63\" class=\"blob-num js-line-number\" data-line-number=\"63\"><\/td>\n        <td id=\"file-topic9_preprocess_pipeline-py-LC63\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_preprocess_pipeline-py-L64\" class=\"blob-num js-line-number\" data-line-number=\"64\"><\/td>\n        <td id=\"file-topic9_preprocess_pipeline-py-LC64\" class=\"blob-code blob-code-inner js-file-line\">lr <span class=\"pl-k\">=<\/span> LinearRegression()<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_preprocess_pipeline-py-L65\" class=\"blob-num js-line-number\" data-line-number=\"65\"><\/td>\n        <td id=\"file-topic9_preprocess_pipeline-py-LC65\" class=\"blob-code blob-code-inner js-file-line\">lr.fit(X_train_scaled, y_train)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_preprocess_pipeline-py-L66\" class=\"blob-num js-line-number\" data-line-number=\"66\"><\/td>\n        <td id=\"file-topic9_preprocess_pipeline-py-LC66\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_preprocess_pipeline-py-L67\" class=\"blob-num js-line-number\" data-line-number=\"67\"><\/td>\n        <td id=\"file-topic9_preprocess_pipeline-py-LC67\" class=\"blob-code blob-code-inner js-file-line\">plotModelResults(lr, <span class=\"pl-v\">X_train<\/span><span class=\"pl-k\">=<\/span>X_train_scaled, <span class=\"pl-v\">X_test<\/span><span class=\"pl-k\">=<\/span>X_test_scaled, <\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_preprocess_pipeline-py-L68\" class=\"blob-num js-line-number\" data-line-number=\"68\"><\/td>\n        <td id=\"file-topic9_preprocess_pipeline-py-LC68\" class=\"blob-code blob-code-inner js-file-line\">                 <span class=\"pl-v\">plot_intervals<\/span><span class=\"pl-k\">=<\/span><span class=\"pl-c1\">True<\/span>, <span class=\"pl-v\">plot_anomalies<\/span><span class=\"pl-k\">=<\/span><span class=\"pl-c1\">True<\/span>)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_preprocess_pipeline-py-L69\" class=\"blob-num js-line-number\" data-line-number=\"69\"><\/td>\n        <td id=\"file-topic9_preprocess_pipeline-py-LC69\" class=\"blob-code blob-code-inner js-file-line\">plotCoefficients(lr)<\/td>\n      <\/tr>\n<\/table>\n\n\n  <\/div>\n\n  <\/div>\n<\/div>\n\n      <\/div>\n      <div class=\"gist-meta\">\n        <a href=\"https://gist.github.com/DmitrySerg/8d7ad85cf3a46831c798c3b284e243e5/raw/8f442aa1209df206d3673b74fa3204f1800897df/topic9_preprocess_pipeline.py\" style=\"float:right\">view raw<\/a>\n        <a href=\"https://gist.github.com/DmitrySerg/8d7ad85cf3a46831c798c3b284e243e5#file-topic9_preprocess_pipeline-py\">topic9_preprocess_pipeline.py<\/a>\n        hosted with &#10084; by <a href=\"https://github.com\">GitHub<\/a>\n      <\/div>\n    <\/div>\n<\/div>\n')
