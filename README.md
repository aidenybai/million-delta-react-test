# [Create 5000 Nodes Benchmark](https://twitter.com/aidenybai/status/1553280656213360640) - DOM vs. Million-React vs. Million-React w/ Delta

### Test pages:

- [DOM](https://dom-bench.vercel.app/)
- [Million-React](https://million-bench.vercel.app/)
- [Million-React w/ Delta](https://delta-bench.vercel.app/)

### How to benchmark with Chrome:

1. Open Devtools
2. Open the Performance tab
3. Click the "Start profiling and reload page" button:

![](/images/reload.png)

4. Drag and highlight the main yellow are of the timeline:

![](/images/results.png)

5. View the scripting time. Longer time is worse.

![](/images/time.png)

6. Repeat for all tests.
