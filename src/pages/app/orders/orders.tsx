import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@/components/ui/table';
import { Helmet } from 'react-helmet-async';

export function Orders() {
    return(
        <>
          <Helmet title='Pedidos'/>
          <div className='flex flex-col gap-4'>
            <h1 className='text-3xl font-bold tracking-tight'>Pedidos</h1>
          </div>
          <div className='space-y-2.5'>
            <form className='flex items-center gap-2'>
                <span className='text-sm font-semibold'>Filtros:</span>
                <Input placeholder='Nome do cliente' className='h-8 w-[320px]' />
            </form>
            <div className='border rounded-md'>
                <Table>
                    <TableHead>
                        <TableRow>
                         <TableHead>Identificador</TableHead>
                         <TableHead>Realizado há</TableHead>
                         <TableHead>Status</TableHead>
                         <TableHead>Cliente</TableHead>
                         <TableHead>Total do pedido</TableHead>
                         <TableHead></TableHead>
                         <TableHead></TableHead>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
          </div>
        </>
    )
}