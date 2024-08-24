import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from './app.module';
import { RoutesModule } from '@sf/backend/routes';

jest.mock('@sf/backend/db', () => ({
  DbModule: class DbModuleMock {},
}));
jest.mock('@sf/backend/routes', () => ({
  RoutesModule: class RoutesModuleMock {},
}));

describe('AppModule', () => {
  let app: TestingModule;
  beforeAll(async () => {
    app = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
  });
  it('should be defined', () => {
    expect(app).toBeDefined();
  });

  it('should inject RouteModule', () => {
    const routeModule = app.get<RoutesModule>(RoutesModule);
    expect(routeModule).toBeDefined();
  });
});
