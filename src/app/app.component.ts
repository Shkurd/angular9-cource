import {Component, ComponentFactoryResolver, ViewChild} from '@angular/core'
import { Meta, Title } from '@angular/platform-browser'
import { ModalComponent } from './modal/modal.component'
import { RefDirective } from './modal/ref.directive'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private resolver: ComponentFactoryResolver,
    private title: Title,
    private meta: Meta,

  ) {
    const t = title.getTitle()
    title.setTitle('new title')
    const m = meta.addTags([
      { name: 'keywords', content: 'Angular keywords, key, key, key' },
      { name: 'description', content: 'Angular description!' }
    ])

  }

  @ViewChild(RefDirective, {static: false}) RefDir: RefDirective

  showModal() {
    const modalFactory = this.resolver.resolveComponentFactory(ModalComponent)
    this.RefDir.containerRef.clear()

    const component = this.RefDir.containerRef.createComponent(modalFactory)
    component.instance.title = 'Dynamic title'
    component.instance.close.subscribe(
      () => {
        this.RefDir.containerRef.clear()
      }
    )
  }
}

