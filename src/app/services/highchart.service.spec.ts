import { TestBed, inject } from '@angular/core/testing';

import { HighchartService } from './highchart.service';

describe('HighchartService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HighchartService]
    });
  });

  it('should be created', inject([HighchartService], (service: HighchartService) => {
    expect(service).toBeTruthy();
  }));
});
