import { onReady, WFRoute } from "@xatom/core";
import { peakflow } from "peakflow";
import { initWfVideo } from "./modules/wfvideo";

onReady(() => {
  global();

  const videoRoutes: string[] = ["/", "/thai-garden"]
  for (const path of videoRoutes) {

    new WFRoute(path).execute(() => {
      initWfVideo()
    })
  }
});

/**
 * Code that runs on all pages
 */
function global(): void {
  // peakflow.execute("dateflow")
}
