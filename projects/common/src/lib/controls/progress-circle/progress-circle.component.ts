import { Component, OnInit, Input, ViewChild, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'lcu-progress-circle',
  templateUrl: './progress-circle.component.html',
  styleUrls: ['./progress-circle.component.scss']
})
export class ProgressCircleComponent implements OnInit {

  protected progressCircle: any;

  protected pCircumference: number;

/**
 * Percentage of the circle to occupy
 */
  @Input('percentage')
  public Percentage: number;

/**
 * The color of the filled portion of the circle
 */
  @Input('percentage-color')
  public PercentageColor: string;

/**
 * The color of the outline circle for the filled portion to trace
 */
  @Input('circle-background-color')
  public CircleBackgroundColor: string;
/**
 * height of the svg
 */
  @Input('height')
  public Height: any;
/**
 * width of the svg
 */
  @Input('width')
  public Width: any;
/**
 * the width of the stroke around the circle
 */
  @Input('stroke-width')
  public StrokeWidth: any;

  @ViewChild('progressCircle', { static: false }) set content(elRef: ElementRef) {
    this.progressCircle = elRef.nativeElement;
  }


  constructor(protected renderer: Renderer2) {
    
   }

  ngOnInit() {
    this.SetDefaultTheme(); 
  }

  public ngAfterViewInit(): void {
       

    this.initProgressCircle();
  }
/**
   * Initializes the SVG progress circle to get and set the necessary values for displaying a rating.
   */
  public initProgressCircle(): void {
    if (this.progressCircle) {
      const radius = this.progressCircle.r.baseVal.value;
      this.pCircumference = radius * 2 * Math.PI;
      this.progressCircle.style.strokeDasharray = `${this.pCircumference} ${this.pCircumference}`;
      this.progressCircle.style.strokeDashoffset = `${this.pCircumference}`;
      

      if (this.Percentage) {
        this.initRatingInfo(this.Percentage);
      }
    }
  }

/**
   * Triggers an CSS animation to offset the progress circle based on the value given.
   *
   * @param percent The percent of total ratings for a given location.
   */
  public initRatingInfo(percent: number): void {
    const offset = this.pCircumference - (percent / 100 * this.pCircumference);

    setTimeout(() => {
      this.renderer.setStyle(this.progressCircle, 'stroke-dashoffset', offset);
    }, 200);
  }
/**
 * Sets the default colors and styles for the circle
 */
  protected SetDefaultTheme(): void{
    if(!this.CircleBackgroundColor){
      this.CircleBackgroundColor = "#F1F4F6";
    }
    console.log("percentage color = ", this.PercentageColor)
    if(!this.PercentageColor){
      this.PercentageColor = "#67C7C5";
    }
    if(!this.Width){
      this.Width = "80";
    }
    if(!this.Height){
      this.Height = "80";
    }
    if(!this.StrokeWidth){
      this.StrokeWidth = "4";
    }
    if(!this.Percentage){
      this.Percentage = 0; 
    }
  }

}
